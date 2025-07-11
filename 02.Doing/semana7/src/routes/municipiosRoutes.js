const express = require('express');
const router = express.Router();

const { actualizarMunicipio,
  crearMunicipio,
  eliminarMunicipio,
  obtenerMunicipio, 
  obtenerMunicipios} = require('../controllers/municipioController.js');

router.get('/', obtenerMunicipios);
router.get('/:id', obtenerMunicipio);
router.post('/', crearMunicipio);
router.put('/:id', actualizarMunicipio);
router.delete('/:id', eliminarMunicipio);

module.exports = router;