const express = require('express');
const { createBook, deleteBook, getBook, getBooks, updateBookDescription } = require("../controllers/books.js");

const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

router.get('/:id', getBook);

router.delete('/:id', deleteBook);

router.patch('/:id', updateBookDescription);

module.exports = router;