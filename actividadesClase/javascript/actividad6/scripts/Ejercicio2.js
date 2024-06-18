console.log('Este es mi ejercicio 2');


// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento.

    1. Descuento 20%
    2. Descuento 50%
    3. Descuento 70%
*/

/*
    let -> cambian en el tiempo, si usted no sabe si cambia o no, mejor pongale let -> comodin
    const -> no cambian
*/

const precioOriginal = parseFloat(prompt('Ingrese el valor base del producto'));
// \n -> salto de linea

const descuento = prompt('Defina el decuento que quiere aplicar: \n 1 -> Descuento de 20% \n 2 -> Descuento de 50% \n 3 -> Descuento del 75%');

let precioFinal = 0;


// Switch -> un Condicionalcuando tengo varios casos posibles

switch (descuento) {

    case '1':
        precioFinal = precioOriginal - (precioOriginal * 0.2);
        alert('El precio Final después del descuento es:' + precioFinal);
        break;
    case '2':
        precioFinal = precioOriginal - precioOriginal * 0.5;
        alert('El precio Final después del descuento es:' + precioFinal);
        break;
    case '3':
        precioFinal = precioOriginal - precioOriginal * 0.7;
        alert('El precio Final después del descuento es:' + precioFinal);
        break;
    default:
        alert('Digite una opción válida');

}