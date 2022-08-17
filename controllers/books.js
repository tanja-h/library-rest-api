const Book = require('../models/Book');

const getBooks = async(req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (error) {
        res.send('error while geting books');
    }
}

const createBook = (req, res) => {
    console.log('book', req.body);
    const book = new Book(req.body);

    console.log(`Trying to save book with name ${book.title} to database!`);
    book.save()
        .then(() => {
            res.send(`Book with name ${book.title} added to database!`);
        })
        .catch(err => {
            res.send(`Error adding new book: ${err} `)
        });
}

const getBook = async(req, res) => {
    const { id } = req.params;

    try {
        const foundBook = await Book.findById(id);
        res.send(foundBook);
    } catch (error) {
        res.send(`Error - book not found with id ${id} - ${error}`);
    }
}

const deleteBook = async(req, res) => {
    const { id } = req.params;

    try {
        await Book.deleteOne({ _id: id });
        res.send(`Book with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting book with id ${id}`);
    }
}

const updateBookDescription = async(req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedBook = await Book.updateOne({ _id: id }, { $set: { description } });
        res.send(updatedBook);
    } catch (error) {
        res.send(`Error while updating book with id ${id}`);
    }
}

module.exports = { getBooks, createBook, getBook, deleteBook, updateBookDescriptionDescription }