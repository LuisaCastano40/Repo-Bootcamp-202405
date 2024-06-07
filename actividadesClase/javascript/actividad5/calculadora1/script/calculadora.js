// 1. Verificar si está vinculado
console.log('Hola, estoy funcionando');

//Cuando se va a manipular elementos del html desde su js, SIEMPRE, lo qprimero que hagan es traer esos elementos

//2. Traer mis elementos del html
//Declarando nuestras variables
//VARIABLE GLOBAL -> la puedo usar en todo el código

//cuando usamos el console -> sólo le decimos a js que vamos a usar variables -> pone el nombre de la variable SIN COMILLAS
// console.log(numero1);
//usted quiere mostrar más de UNA variable al tiempo, debe separarlas con ,
// console.log(numero2, pantalla);

// concatenación -> texto + variable  o número -> algo que va en comillas y otra cosa que no va en comillas
//console.log('el elemento input numero 1 es: ' + numero1);
//NO ES CONCATENACIÓN
//console.log(5+6);
//SI ES CONCATENACIÓN
//console.log('5'+6);

//VARIABLES GLOBALES
let numero1;
let numero2;
let pantalla;
let resultado = 0; //inicializar en cero


//asignarle a mis variables los elementos de html
//document -> me accede al html
//getElementById -> trae el elemento por su ID
numero1 = document.getElementById('numero1').value;
numero2 = document.getElementById('numero2').value;
pantalla = document.getElementById('pantalla');


function suma() {
    //.value -> me da el valor de mi input -> SIEMPRE VIENE COMO TEXTO
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;

    //typeof -> me dice el tipo de dato
    /*console.log(typeof(numero1));
    console.log(typeof(numero2));*/

    /*let num1 = parseInt(numero1);
    let num2 = parseInt(numero2);

    console.log(typeof(num1));
    console.log(typeof(num2));*/

    //VARIABLE LOCAL -> sólo funciona en la función suma()
    let resultadoSuma = parseInt(numero1) + parseInt(numero2);
    //textContent -> me modifica el contenido de texto de mi elemento
    pantalla.textContent = resultadoSuma;
}

function resta(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    resultado = parseInt(numero1) - parseInt(numero2);
    //VARIABLE GLOBAL
    pantalla.textContent = resultado;
}

function multiplicación(){
    numero1 = document.getElementById('numero1').value;
    numero2 = document.getElementById('numero2').value;
    resultado = parseInt(numero1)*parseInt(numero2);
    pantalla.textContent = resultado;
}

function division(){
    numero1 = parseFloat(document.getElementById('numero1').value);
    numero2 = parseFloat(document.getElementById('numero2').value);
    resultado = numero1/numero2;
    //toFixed -> me muestra la cantidad de decimales que yo quiero
    //Math.ceil -> redondea por encima
    //Math.round -> redondea números
    pantalla.textContent = resultado.toFixed(3);
}