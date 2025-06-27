import express from 'express';
import { logger } from './src/middlewares/logger.js';
import { loadData } from './src/storage.js';
import usersRouter from './src/routes/usersRoutes.js';

const PORT = 3000;
await loadData();

const app = express();

app.use(express.json());

app.get('/:name', logger, (req, res) => {
  //http://localhost:3000/Rodrigo?isAdmin=true
  if (req.query.isAdmin === 'true') {
    res.end(`Welcome Admin ${req.params.name} to your API`);
  }
  else {
    res.end(`Welcome ${req.params.name}`);
  }
});

app.use('/api', usersRouter);

app.get('/saludo/:name',logger, (req, res) => {
  const { name } = req.params;
  res.json({message: `Hola ${name}`});
});

app.get('/api/edad', logger, (req, res) => {
  const anioNacimiento = parseInt(req.query.anioNacimiento);
  const actual = new Date().getFullYear();

  if(!anioNacimiento || anioNacimiento > actual) {
    console.log(anioNacimiento, actual);
    return res.status(400).json({error: 'Año inválido'});
  }

  const edad = actual - anioNacimiento;
  res.json({anioNacimiento, edad});
});

app.get('/suma/:a/:b', logger, (req, res) => {
  const { a, b } = req.params;
  const suma = Number(a) + Number(b);

if (isNaN(suma)) {
    return res.status(400).json({error: 'Parámetros inválidos'});
  }

  res.json ({suma});
});

app.get('/perfil/:usuario', logger, (req, res) => {
  const { usuario } = req.params;
  const {lang} = req.query;
  let mensaje=`Welcome ${usuario}`;
  if (lang === 'es') {
    mensaje = `Bienvenido ${usuario}`;
  } else if (lang === 'en') {
    mensaje = `Welcome ${usuario}`;
  } else if (lang === 'fr') {
    mensaje = `Bienvenue ${usuario}`;
  } else if (lang === 'de') {
    mensaje = `Willkommen ${usuario}`;
  }

  res.json({mensaje,language:lang || 'default'});
});

app.get('/api/buscar', logger, (req, res) => {
  const {producto, categoria} = req.query;
  if (!producto || !categoria) {
    return res.status(400).json({mensaje: 'Faltan parámetros en la ruta'});
  }
res.json({
  busqueda:producto,
  categoria,
  mensaje: `Buscando ${producto} en la categoría ${categoria}`
});
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});