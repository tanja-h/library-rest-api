const express = require('express');
const { createCatalog, deleteCatalog, getCatalog, getCatalogs, updateCatalogDescription } = require("../controllers/catalogs.js");

const router = express.Router();

router.get('/', getCatalogs);

router.post('/', createCatalog);

router.get('/:id', getCatalog);

router.delete('/:id', deleteCatalog);

router.patch('/:id', updateCatalogDescription);

module.exports = router;