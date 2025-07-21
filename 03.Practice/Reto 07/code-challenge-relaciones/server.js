import express from "express";
import routes from "./routes/index.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
