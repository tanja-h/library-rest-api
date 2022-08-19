const express = require('express');
const { registerUser, loginUser, deleteUser, getUser, getUsers, updateUserAge } = require("../controllers/users.js");

const router = express.Router();

router.get('/', getUsers);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUserAge);

module.exports = router;