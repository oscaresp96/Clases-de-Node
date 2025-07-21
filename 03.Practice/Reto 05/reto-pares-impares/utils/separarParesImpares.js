export function separarNumParesImpares(numeros) {
    const numPares = numeros.filter(n => n % 2 === 0);
    const numImpares = numeros.filter(n => n % 2 !== 0);
    return { numPares, numImpares };
}

export function validarNumeros(elementos) {
  return elementos.every(elemento => {
    const numero = parseFloat(elemento.trim());
    return !isNaN(numero) && elemento.trim() !== '';
  });
}

export function convertirANumeros(elementos) {
  return elementos.map(elemento => Number(elemento.trim()));
}