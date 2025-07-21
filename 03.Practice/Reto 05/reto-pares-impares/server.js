import express from "express";
import{ separarNumParesImpares, validarNumeros, convertirANumeros, } from "./utils/separarParesImpares.js";

const port = process.env.PORT || 3000;
const app = express();

app.get("/filtrarParesImpares", (req, res) => {
  try {
    const { numeros } = req.query;
    
    if (!numeros) {
      return res.status(400).json({
        error: "El parámetro 'numeros' es requerido",
        ejemplo: "?numeros=1,2,3,4,5"
      });
    }
    let numerosString;
    
    if (Array.isArray(numeros)) {
      numerosString = numeros[0];
    }
    else {
      numerosString = String(numeros);
    }
    
    const elementosArray = numerosString.split(',');

    if (!validarNumeros(elementosArray)) {
      return res.status(400).json({
        error: "Todos los valores deben ser números válidos",
        ejemplo: "?numeros=1,2,3,4,5"
      });
    }
    
    const numerosArray = convertirANumeros(elementosArray);

    const { numPares, numImpares } = separarNumParesImpares(numerosArray);

    res.json({ original: numerosArray, numPares, numImpares });
  }

  catch (error) {
    res.status(500).json({ mensaje: ({error: "Error interno del servidor"})
});

app.get("/", (req, res) => {
  res.json({
    mensaje: "🔢 Servidor de Separacion de Numeros Pares e Impares",
    uso: "GET /filtrarParesImpares?numeros=1,2,3,4,5",
    ejemplo: "http://localhost:3000/filtrarParesImpares?numeros=1,2,3,4,5,6"
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
  console.log(`📖 URL Test: http://localhost:${port}/filtrarParesImpares?numeros=1,2,3,4,5,6`);
});
