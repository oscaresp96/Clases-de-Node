const Estado = require('../models/estado.js');

async function obtenerEstado(req,res){
    try{
        const estado = await Estado.findById(req.params.id);
        if(!estado) {
            return res.status(400).json({ error: 'Estado no encontrado'});
        }
        res.json(estado);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function obtenerEstados(req,res) {
    try{
        const estados = await Estado.find().sort({ nombre});
        res.json(estados);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function crearEstado (req,res) {
    try{
        const { nombre, estadoId } = req.body;
        if(!nombre || !estadoId){
            return res.status(400).json({ error: 'Faltan Campos Requeridos'});
        }
        const newEstado = await Estado.create({ nombre, estadoId });
        res.json(newEstado);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function actualizarEstado(req, res) {
try {
    const { nombre, estadoId } = req.body;
    if (!nombre || !estadoIdId) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    const updatedEstado = await Estado.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedEstado) {
    return res.status(400).json({ error: 'Estado no encontrado' });
    }
    res.json(updatedEstado);

} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

async function eliminarEstado(req, res) {
try {
    const deletedEstado = await Estado.findByIdAndDelete(req.params.id);

    if (!deletedEstado) {
    return res.status(400).json({ error: 'Estado no encontrado' });
    }
    res.status(204);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

module.exports = {
actualizarEstado,
crearEstado,
eliminarEstado,
obtenerEstado,
obtenerEstados
}