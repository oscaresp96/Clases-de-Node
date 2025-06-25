import http from "http";
import { invertirCadena } from "./utils/invertir.js";

const server = http.createServer((req, res) => {
  const { method } = req;
  //http://localhost:3003/invertir?texto=hola
   const url = new URL(req.url, `http://${req.headers.host}`);
   console.log(`Received request: ${method} ${url}`);

    req.query = Object.fromEntries(url.searchParams.entries());
    console.log(`Query parameters:`, req.query);
    //req.pathname = url.pathname;
    console.log(`Pathname:`, url.pathname);
  if (url.pathname === "/invertir" && method === "GET") {
   
    const resultado = invertirCadena(req.query.texto);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(resultado);
  }else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3003, () => {
  console.log(`Server listening on port 3003`);
});
