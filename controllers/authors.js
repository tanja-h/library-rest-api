const Author = require('../models/Author');

const getAuthors = async(req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    } catch (error) {
        res.send('error while geting users');
    }
}

const createAuthor = (req, res) => {
    console.log('body', req.body);
    const user = new Author(req.body);

    console.log(`Trying to save author with name ${author.firstName} to database!`);
    author.save()
        .then(() => {
            // users.push({ ...user, id: uuidv4() });
            res.send(`Author with name ${author.firstName} added to database!`);
        })
        .catch(err => {
            res.send(`Error adding new author: ${err} `)
        });
}

const getAuthor = async(req, res) => {
    const { id } = req.params;

    try {
        const foundAuthor = await Author.findById(id);
        res.send(foundAuthor);
    } catch (error) {
        res.send(`Error - author not found with id ${id} - ${error}`);
    }
}

const deleteAuthor = async(req, res) => {
    const { id } = req.params;

    try {
        await Author.deleteOne({ _id: id });
        res.send(`Author with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting  with id ${id}`);
    }
}

const updateAuthorDes = async(req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedAuthor = await Author.updateOne({ _id: id }, { $set: { description: description } });
        res.send(updatedAuthor);
    } catch (error) {
        res.send(`Error while updating  with id ${id}`);
    }
}

module.exports = { getAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthorDes }