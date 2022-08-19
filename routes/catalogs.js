const express = require('express');
const { createCatalog, deleteCatalog, getCatalog, getCatalogs, updateCatalogDescription, addBookToCatalog } = require("../controllers/catalogs.js");

const router = express.Router();

router.get('/', getCatalogs);

router.post('/', createCatalog);

router.get('/:id', getCatalog);

router.delete('/:id', deleteCatalog);

router.patch('/:id/description', updateCatalogDescription);

router.patch('/:id/book', addBookToCatalog);

module.exports = router;