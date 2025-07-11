const express = require('express');
const router = express.Router();

const { actualizarMunicipio,
  crearMunicipio,
  eliminarMunicipio,
  obtenerMunicipio, 
  obtenerMunicipios,
  obtenerMuniciposEstado} = require('../controllers/municipioController.js');

router.get('/', obtenerMunicipios);
router.get('/:id', obtenerMunicipio);
router.get('/estado/:id', obtenerMuniciposEstado)
router.post('/', crearMunicipio);
router.put('/:id', actualizarMunicipio);
router.delete('/:id', eliminarMunicipio);

module.exports = router;