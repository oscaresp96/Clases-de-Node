import express from 'express';
import { obtenerUsers, crearUser, actualizarUser, deleteUser, obtenerUserById } from '../controllers/userController.js';

const router = express.Router();

router.get('/user', obtenerUsers);
router.get('/user/:id', obtenerUserById);
router.post('/user', crearUser);
router.put('/user/:id', actualizarUser);
router.delete('/user/:id', deleteUser);

export default router;