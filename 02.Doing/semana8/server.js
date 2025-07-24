import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes/index.js";
import { sequelize } from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas
app.use("/api", routes);

// Probar conexión a la base de datos antes de iniciar el servidor
sequelize.authenticate()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });