const express = require('express');
const router = express.Router();

const usuariosRoutes = require('./usuariosRoutes.js');
const estadosRoutes = require('./estadosRoutes.js');
const municipiosRoutes = require('./municipiosRoutes.js');

router.use('/usuarios', usuariosRoutes);
router.use('/estados', estadosRoutes);
router.use('/municipios', municipiosRoutes);

module.exports = router;