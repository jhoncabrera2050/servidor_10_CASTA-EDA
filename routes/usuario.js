//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/usuario
router.post('/', userController.crearUsuario);
router.get('/', userController.obtenerUsuario);

module.exports = router;