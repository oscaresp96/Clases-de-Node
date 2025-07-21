import http from 'http';
import url from 'url';
import encontrarNumMayor from './utils/encontrarMayor';


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET' && parsedUrl.pathname === '/numMayor') {
    const numerosParam = parsedUrl.query.numeros;

    if (!numerosParam) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Falta el parámetro "numeros".' }));
      return;
    }

    const numerosArray = numerosParam.split(',').map(n => Number(n.trim()));

    if (!numerosArray.every(n => typeof n === 'number' && !isNaN(n))) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todos los valores deben ser números válidos.' }));
      return;
    }

    const numMayor = encontrarNumMayor(numerosArray);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ numeros: numerosArray, mayor: numMayor }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada.' }));
  }
});

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
