import express from "express";
import obtenerCalifEstudiantes from "../controllers/calificacionesController.js";

const router = express.Router();

router.get("/calificacionesEstudiante", obtenerCalifEstudiantes);

export default router;