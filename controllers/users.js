const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send('error while geting users');
    }
}

const registerUser = async (req, res) => {
    const userBody = req.body;
    console.log('body', userBody);

    const { error } = registerValidation(userBody);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({ email: userBody.email });
    if (emailExists) return res.status(400).send('Someone already registered with this email!');

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(userBody.password, salt);

    const user = new User({
        firstName: userBody.firstName,
        lastName: userBody.lastName,
        age: userBody.age,
        email: userBody.email,
        password: hashedPassword,
    });

    console.log(`Trying to save user with name ${user.firstName} to database!`);
    user.save()
        .then(() => {
            res.send(`User with name ${user.firstName} added to database!`);
        })
        .catch(err => {
            res.status(400).send(`Error adding new user: ${err} `)
        });
}

const loginUser = async (req, res) => {
    const userBody = req.body;
    console.log('body', userBody);

    const { error } = loginValidation(userBody);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: userBody.email });
    if (!user) return res.status(400).send('Wrong email!');

    const isPasswordValid = await bcrypt.compare(userBody.password, user.password);
    if (!isPasswordValid) return res.status(400).send('Wrong password!');

    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

}

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const foundUser = await User.findById(id);
        res.send(foundUser);
    } catch (error) {
        res.send(`Error - user not found with id ${id} - ${error}`);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.deleteOne({ _id: id });
        res.send(`User with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting user with id ${id}`);
    }
}

const updateUserAge = async (req, res) => {
    const { id } = req.params;
    const { age } = req.body;

    try {
        const updatedUser = await User.updateOne({ _id: id }, { $set: { age: age } });
        res.send(updatedUser);
    } catch (error) {
        res.send(`Error while updating  with id ${id}`);
    }
}

module.exports = { getUsers, registerUser, loginUser, getUser, deleteUser, updateUserAge }