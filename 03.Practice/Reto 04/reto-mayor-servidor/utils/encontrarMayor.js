function encontrarNumMayor(numeros) { 
    if (!Array.isArray(numeros) || numeros.length === 0) {
        throw new Error("El array de números no puede ser un arreglo vacío");
    }

    if (!numeros.every(n => typeof n === 'number' && !isNaN(n))) {
    throw new Error('Todos deben ser números válidos.');
    
    }
    return Math.max(...numeros);
}

export default encontrarNumMayor;

