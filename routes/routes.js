const express = require('express');
const router = express.Router();
const controllers= require('../controllers/controllers');
const path = require('path');



/**************GET'S****************/


//obtener la cantidad de productos para la paginacion
router.get('/inicio/cantidad',controllers.contarProductos);




/**************POST'S****************/
//devuelve la lista de tags
router.post('/suggestions',controllers.suggestions);
//para ingresar un producto nuevo para el usuario
router.post('/ingresarProducto',controllers.ingresarProdcuto);

router.post('/inicio/pagina/muestra',controllers.mostrarProductos);

module.exports = router;