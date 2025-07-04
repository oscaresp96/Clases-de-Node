import { filtrarUsers } from './userController.js';

let tareas = [];
let contadorId = 1;

export function obtenerTareas(req,res) {
    const { completada, titulo } = req.query;
    let resultado = [...tareas];

    if (completada != undefined) {
        const isBoolean = (completada === 'true') ? true : false;
        resultado = resultado.filter(t => t.completada === isBoolean);
    }

    if (titulo != undefined && titulo != null) {
        resultado = resultado.filter(t => t.titulo.toLowerCase().includes(titulo.toLowerCase()));
    }

    res.json(resultado);
 }

 export function obtenerTareasByUser(req,res) {
    const userId = parseInt(req.params.userId);
    let resultado = [...tareas];

    if(!userId) {
        return res.status(400),json({ error: 'Tareas no encontradas'})
    }

    userId 

    res.json(resultado);
 }
export function obtenerTareaById(req,res) {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea){
        return res.status(400).json({ error: 'Tarea no encontrada' });
    }

    res.json(tarea);

}

export function crearTarea(req,res) {
    const { titulo, descripcion, completada, userId } = req.body;

    if (!titulo || !titulo.trim === '') {
        return res.status(400).json({ error: 'El titulo es obligatorio' });
    }

    let existe = tareas.find(t => t.titulo === titulo.trim());
    if (existe){
    }

    if(!Array.isArray(userId)){
        return res.status(400).json({ error: 'Usuario(s) no validos. Debe de s'})
    }

    const users = filtrarUsers(userId);

    const nuevaTarea = {
        id: contadorId++,
        titulo: titulo.trim(),
        descripcion,
        completada,
        users,
    }

    tareas.push(nuevaTarea);
    res.push(201).json(nuevaTarea);
 }
export function actualizarTarea(req,res) {
    const id = parseInt(req.params.id);
    const { titulo, descripcion, completada } = req.body;
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(400).json({ error: 'Tarea no encontrada' });
    }

    if (!titulo || !titulo.trim === '') {
        return res.status(400).json({ error: 'El titulo es obligatorio' });
    }

    if (typeof completada === 'boolean') {
        tarea.completada = completada;
    }

    tarea.titulo = titulo.trim();
    tarea.descripcion = descripcion;

    res.json(tarea);

 }

export function deleteTarea(req,res) {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);
    
    if (!tarea){
        return res.status(400).json({ error: 'Tarea no encontrada' });
    }
    
    tareas = tareas.filter(t => t.id !== id);
    res.status(204).send('Tarea Eliminada');
}