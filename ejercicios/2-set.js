const parrafo = 'Este es un ejemplo de un parrafo donde algunas palabras se repiten, como un y ejemplo';

// Funcion para contar palabras unicas.
const contarPalabras = (texto) => {
    const palabras = texto.toLowerCase().replace(/[.,]/g, '').split(' ');

    // Usar set para obtener palabras unicas
    const palabrasUnicas = new Set(palabras);
    return palabrasUnicas.size;
};

console.log('Numero de palabras unicas: ', contarPalabras(parrafo));    