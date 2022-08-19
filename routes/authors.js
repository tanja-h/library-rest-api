const express = require('express');
const { createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthorDes } = require("../controllers/authors.js");
const verifyToken = require('./verifyToken');

const router = express.Router();

router.get('/', getAuthors);

router.post('/', verifyToken, createAuthor);

router.get('/:id', getAuthor);

router.delete('/:id', deleteAuthor);

router.patch('/:id', updateAuthorDes);

module.exports = router;