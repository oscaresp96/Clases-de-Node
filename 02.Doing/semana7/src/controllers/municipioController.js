const Municipio = require('../models/municipio.js');

async function obtenerMunicipio(req,res){
    try{
        const municipio = await Municipio.findById(req.params.id);
        if(!municipio) {
            return res.status(400).json({ error: 'Municipio no encontrado'});
        }
        res.json(municipio);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function obtenerMunicipios(req,res) {
    try{
        const municipios = await Municipio.find().sort({ nombre});
        res.json(municipios);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function crearMunicipio (req,res) {
    try{
        const { nombre, municipioId } = req.body;
        if(!nombre || !municipioId){
            return res.status(400).json({ error: 'Faltan Campos Requeridos'});
        }
        const newMunicipio = await Municipio.create({ nombre, municipioId });
        res.json(newMunicipio);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function actualizarMunicipio(req, res) {
try {
    const { nombre, municipioId } = req.body;
    if (!nombre || !municipioId) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    const updatedMunicipio = await Municipio.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedMunicipio) {
    return res.status(400).json({ error: 'Municipio no encontrado' });
    }
    res.json(updatedMunicipio);

} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

async function eliminarMunicipio(req, res) {
try {
    const deletedMunicipio = await Municipio.findByIdAndDelete(req.params.id);

    if (!deletedMunicipio) {
    return res.status(400).json({ error: 'Municipio no encontrado' });
    }
    res.status(204);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

module.exports = {
actualizarMunicipio,
crearMunicipio,
eliminarMunicipio,
obtenerMunicipio,
obtenerMunicipios
}