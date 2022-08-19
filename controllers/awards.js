const Award = require('../models/Award');

const getAwards = async(req, res) => {
    try {
        const awards = await Award.find();
        res.send(awards);
    } catch (error) {
        res.send('error while geting awards');
    }
}

const createAward = (req, res) => {
    console.log('body', req.body);
    const award = new Award(req.body);

    console.log(`Trying to save award with name ${user.title} to database!`);
    award.save()
        .then(() => {
            // users.push({ ...user, id: uuidv4() });
            res.send(`Award with name ${award.title} added to database!`);
        })
        .catch(err => {
            res.send(`Error adding new award: ${err} `)
        });
}

const getAward = async(req, res) => {
    const { id } = req.params;

    try {
        const foundAward = await Award.findById(id);
        res.send(foundAward);
    } catch (error) {
        res.send(`Error - award not found with id ${id} - ${error}`);
    }
}

const deleteAward = async(req, res) => {
    const { id } = req.params;

    try {
        await Award.deleteOne({ _id: id });
        res.send(`Award with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting  with id ${id}`);
    }
}

const updateAwardDes = async(req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedAward = await Award.updateOne({ _id: id }, { $set: { description: description } });
        res.send(updatedAward);
    } catch (error) {
        res.send(`Error while updating  with id ${id}`);
    }
}

module.exports = { getAwards, createAward, getAward, deleteAward, updateAwardDes }