const Usuario = require('../models/usuario.js');

async function obtenerUsuario(req,res){
    try{
        const user = await Usuario.findById(req.params.id);
        if(!user) {
            return res.status(400).json({ error: 'Usuario no encontrado'});
        }
        res.json(user);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function obtenerUsuarios(req,res) {
    try{
        const users = await Usuario.find().sort({ nombreCompleto});
        res.json(users);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function crearUsuario (req,res) {
    try{
        const { nombreCompleto, email, municipioId } = req.body;
        if(!nombreCompleto || !email || !municipioId){
            return res.status(400).json({ error: 'Faltan Campos Requeridos'});
        }
        const newUser = await Usuario.create({ nombreCompleto, email, municipioId });
        res.json(newUser);
    } catch (error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

async function actualizarUsuario(req, res) {
try {
    const { nombreCompleto, email, municipioId } = req.body;
    if (!nombreCompleto || !email || !municipioId) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    const updatedUser = await Usuario.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedUser) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    res.json(updatedUser);

} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

async function eliminarUsuario(req, res) {
try {
    const deletedUser = await Usuario.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    res.status(204);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}

module.exports = {
actualizarUsuario,
crearUsuario,
eliminarUsuario,
obtenerUsuario,
obtenerUsuarios
}