let users = [];
let contadorUserId = 1;

export function obtenerUsers(req,res) {
    res.json(users);
}

export function obtenerUserById(req,res) {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
}

export function crearUser(req,res) {
    const { nombre, correo } = req.body;

    if(!nombre || !correo) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
    }

    const nuevoUser ={
        id: contadorUserId++,
        nombre: nombre.trim(),
        correo: correo.trim(),
    };
    users.push(nuevoUser);
    res.status(201).json(nuevoUser);
}

export function actualizarUser(req,res) {
    const id = parseInt(req.params.id);
    const { nombre, correo } = req.body;
    const user = users.find(u => u.id === id);

    if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    if (!nombre || !correo) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
    }

    user.nombre = nombre.trim();
    user.correo = correo.trim();
    res.json(user);
}

export function deleteUser(req,res) {
    const id = parseInt(req.params.id);
    const existe = users.find(u => u.id === id);

    if (!existe) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    users = users.filter(u => u.id !== id);
    res.status(204).json({ mensaje: 'Usuario eliminado', id });
}

export function filtrarUsers(userIds){
    const usersFiltrados = [];

    userIds.map(uId => {
        usuariosFiltrados.push(usuarios.filter(u => u.id === uId) [0]);
    });
    return usuariosFiltrados;
}