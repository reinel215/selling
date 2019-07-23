const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
const path = require('path');


//muestra todos los objetos en la base de datos
router.post('/suggestions',controllers.suggestions);
router.post('/ingresarProducto',controllers.ingresarProdcuto);

module.exports = router;