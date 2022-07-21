const express = require('express');
const { createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthorDes } = require("../controllers/authors.js");

const router = express.Router();

router.get('/', getAuthors);

router.post('/', createAuthor);

router.get('/:id', getAuthor);

router.delete('/:id', deleteAuthor);

router.patch('/:id', updateAuthorDes);

module.exports = router;