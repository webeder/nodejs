// routes/sapRoutes.js
const express = require('express');
const router = express.Router();
const sapController = require( '../controllers/sapcontroller');

// Define a rota POST para chamar a função do controlador
router.post('/', sapController.callPostWithCsrf);

module.exports = router;
