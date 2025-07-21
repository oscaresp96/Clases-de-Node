import express from "express";
import calificacionesRoutes from "./calificacionesRoutes"

const routes = express.Router();

routes.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la Portal de Calificaciones",
        endpoints: [
        "GET / - Bienvenidxs",
        "GET /calificaciones - Obtener todas las calificaciones"
        ]
    });
});

export default routes;
