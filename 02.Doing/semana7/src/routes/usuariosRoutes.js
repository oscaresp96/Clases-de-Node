const express = require('express');
const router = express.Router();

const { actualizarUsuario,
  crearUsuario,
  eliminarUsuario,
  obtenerUsuario,
  obtenerUsuariosMunicipio,
  obtenerUsuarios } = require('../controllers/usuarioController.js');

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.get('/municipio/:id', obtenerUsuariosMunicipio)
router.post('/', crearUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

module.exports = router;