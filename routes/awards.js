const express = require('express');
const { createAward, deleteAward, getAward, getAwards, updateAwardDescription } = require("../controllers/awards.js");

const router = express.Router();

router.get('/', getAwards);

router.post('/', createAward);

router.get('/:id', getAward);

router.delete('/:id', deleteAward);

router.patch('/:id', updateAwardDescription);

module.exports = router;