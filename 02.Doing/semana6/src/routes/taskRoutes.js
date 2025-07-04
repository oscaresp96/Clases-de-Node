import express from 'express';
import { actualizarTarea, crearTarea, deleteTarea, obtenerTareaById, obtenerTareas, obtenerTareasByUser } from '../controllers/taskController.js';

const router = express.Router();

//http://localhost:3000/task

//Obtener todas las tareas
router.get('/task', obtenerTareas);
router.get('/task/user/:userId', obtenerTareasByUser);
router.get('/task/:id', obtenerTareaById)
router.post('/task', crearTarea);
router.put('/task/:id', actualizarTarea);
router.delete('/task/:id', deleteTarea);

export default router;