export function contarPropObjeto(req, res) {
const objeto = req.body;
 
if(!objeto || typeof objeto !=='object' || Array.isArray(objeto)) {
    return res.status(400).json({ error: "El Body debe de ser un Objeto válido" });
}

const propDetalles = Object.keys(objeto);
const cantidadProp = propDetalles.length;

if(req.query.detallado === 'true') {
    return res.json({cantidadDePropiedades: cantidadProp, detallesDePropiedades: propDetalles});
}
res.json({cantidadDePropiedades: cantidadProp});
}
