// routes/sapRoutes.js
const express = require('express');
const router2 = express.Router();
const sapController = require( '../controllers/controleoutro');

// Define a rota POST para chamar a função do controlador
router2.post('/', sapController.callPostOutro);

module.exports = router2;
