const User = require('../models/User');
const { registerValidation } = require('../validation.js');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send('error while geting users');
    }
}

const registerUser = (req, res) => {
    console.log('body', req.body);

    const { error } = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const user = new User(req.body);

    console.log(`Trying to save user with name ${user.firstName} to database!`);
    user.save()
        .then(() => {
            res.send(`User with name ${user.firstName} added to database!`);
        })
        .catch(err => {
            res.status(400).send(`Error adding new user: ${err} `)
        });
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

module.exports = { getUsers, registerUser, getUser, deleteUser, updateUserAge }