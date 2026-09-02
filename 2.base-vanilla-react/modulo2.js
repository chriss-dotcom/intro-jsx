
function sumar(paramUno, paramDos) {
    return paramUno + paramDos;
}

function restar(paramUno, paramDos) {
    return paramUno - paramDos;
}

function esPar(numero) {
    return (numero % 2 === 0);
}

// = , haciendo asignacion a = b, significa que a toma el valor de b
// == estoy comparando, pero no validando el tipo
// === comparacion estricta.

function calcularPrecioConIva(precioBase, porcentajeIva) {
    const iva = (precioBase * porcentajeIva) / 100;
    return precioBase + iva;
}

const IVA_POR_DEFECTO = 19;

export { sumar, restar, esPar, calcularPrecioConIva, IVA_POR_DEFECTO }
export default sumar;