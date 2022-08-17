const Catalog = require('../models/Catalog');

const getCatalogs = async (req, res) => {
    try {
        const catalogs = await Catalog.find();
        res.send(catalogs);
    } catch (error) {
        res.send('error while geting catalogs');
    }
}

const createCatalog = (req, res) => {
    console.log('catalog', req.body);
    const catalog = new Catalog(req.body);

    console.log(`Trying to save catalog with name ${catalog.title} to database!`);
    catalog.save()
        .then(() => {
            res.send(`Catalog with name ${catalog.title} added to database!`);
        })
        .catch(err => {
            res.send(`Error adding new catalog: ${err} `)
        });
}

const getCatalog = async (req, res) => {
    const { id } = req.params;

    try {
        const foundCatalog = await Catalog.findById(id);
        res.send(foundCatalog);
    } catch (error) {
        res.send(`Error - catalog not found with id ${id} - ${error}`);
    }
}

const deleteCatalog = async (req, res) => {
    const { id } = req.params;

    try {
        await Catalog.deleteOne({ _id: id });
        res.send(`Catalog with id ${id} deleted from database!`);
    } catch (error) {
        res.send(`Error while deleting catalog with id ${id}`);
    }
}

const updateCatalogDescription = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updatedCatalog = await Catalog.updateOne({ _id: id }, { $set: { description } });
        res.send(updatedCatalog);
    } catch (error) {
        res.send(`Error while updating catalog with id ${id}`);
    }
}

module.exports = { getCatalogs, createCatalog, getCatalog, deleteCatalog, updateCatalogDescription }