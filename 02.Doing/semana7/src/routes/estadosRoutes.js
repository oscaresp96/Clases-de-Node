const express = require('express');
const router = express.Router();

const { actualizarEstado,
  crearEstado,
  eliminarEstado,
  obtenerEstado,
  obtenerEstados } = require('../controllers/estadoController.js');

router.get('/', obtenerEstados);
router.get('/:id', obtenerEstado);
router.post('/', crearEstado);
router.put('/:id', actualizarEstado);
router.delete('/:id', eliminarEstado);

module.exports = router;