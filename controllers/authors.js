const Author = require('../models/Author');

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    } catch (error) {
        res.send('error while geting authors');
    }
}

const createAuthor = (req, res) => {
    console.log('body', req.body);
    const author = new Author(req.body);

    console.log(`Trying to save author with name ${author.firstName} ${author.lastName} to database!`);
    author.save()
        .then(() => {
            res.send(`Author with name ${author.firstName} ${author.lastName} added to database!`);
        })
        .catch(err => {
            res.send(`Error adding new author: ${err} `)
        });
}

const getAuthor = async (req, res) => {
    const { id } = req.params;

    try {
        const foundAuthor = await Author.findById(id);
        res.send(foundAuthor);
    } catch (error) {
        res.send(`Error - author not found with id ${id} - ${error}`);
    }
}

const deleteAuthor = async (req, res) => {
    const { id } = req.params;

    try {
        await Author.deleteOne({ _id: id });
        res.send(`Author with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting author with id ${id}`);
    }
}

const updateAuthorDes = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedAuthor = await Author.updateOne({ _id: id }, { $set: { description } });
        res.send(updatedAuthor);
    } catch (error) {
        res.send(`Error while updating author with id ${id}`);
    }
}

module.exports = { getAuthors, createAuthor, getAuthor, deleteAuthor, updateAuthorDes }