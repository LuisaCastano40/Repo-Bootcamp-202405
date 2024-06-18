// 1. verificar cinculación correcta
console.log('Estoy conectado a mi HTML');

// Ejercicios de condicionales

/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/


/*
    1. El problema
    2. Analizarlo
    3. Diseñar 
    4. Codificar

*/

/*let -> Puede variar
const -> siempre tiene que ser igual*/
// let ciudadania = prompt("Escriba si o no en caso de ser o no ciudadano colombiano");

let edad = parseInt(prompt("Por favor ingrese su edad"));
let esCiudadano = confirm("¿Eres ciudadano colombiano?");

console.log(edad, esCiudadano);

// Condicional ->  if
// Operador lógico && -> se tienen que cumplir si o sí todas las condiciones

if(edad >= 18 && esCiudadano == true){
    alert('Eres elegible para votar en las próximas elecciones')
} else {
    alert('No eres elegible para votar en las próximas elecciones')
}

// El else me incluye todas las opciones restantes que no están cumpliendo con las condiciones
