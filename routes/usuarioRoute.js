const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para listar los usuarios
router.get('/usuario/', usuarioController.getUserList);

// Ruta para mostrar el formulario de agregar usuario
router.get('/usuario/add', usuarioController.getAddUsuarioForm);

// Ruta para agregar un nuevo usuario
router.post('/usuario/add', usuarioController.addUsuario);

// Ruta para mostrar el formulario de consulta de usuario
router.get('/usuario/consult', usuarioController.getConsultUsuarioForm);

// Ruta para consultar un usuario
router.post('/usuario/consult', usuarioController.consultUsuario);

// Ruta para mostrar el formulario de edición de usuario
router.get('/usuario/edit', usuarioController.getEditUsuarioForm);

// Ruta para editar un usuario
router.post('/usuario/edit', usuarioController.editUsuario);

// Ruta para mostrar el formulario de eliminación de usuario
router.get('/usuario/delete', usuarioController.getDeleteUsuarioForm);

// Ruta para eliminar un usuario
router.post('/usuario/delete', usuarioController.deleteUsuario);

module.exports = router;
