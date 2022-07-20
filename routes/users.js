const express = require('express');
const { createUser, deleteUser, getUser, getUsers, updateUserAge } = require("../controllers/users.js");

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserAge);

module.exports = router;