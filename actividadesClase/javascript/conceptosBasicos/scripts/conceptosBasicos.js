// 1. lo primero es verificar que la vinculaciòn es correcta
// ENVIAMOS UN MENSAJITO

console.log('HOLA! MUNDO - Estoy vinculado con mi html');

// 1. VARIABLES EN JS

/* DEFINICIÒN -> espacio de memoria -> cajita que me guarda informaciòn
en forma de datos -> diferentes tipos, numerico (2, 2.3, 4.65487465874), 
boleabnos, arreglos, texto (strings), objetos */

// Definimos para usarlo constantemente 

/*
    VARIABLES EN JS
    (NO SE USA)
    1. VAR -> nos guarda datos que pueden cambiar en el tiempo (en desuso)
    
    2. LET -> nos guarda datos que pueden cambiar en el tiempo
    3. CONST -> nos guarda datos constantes -> NO CAMBIAN EN EL TIEMPO
*/

// 2. DECLARACIÒN DE VARIABLES

/*
1. definir que tipo de variable (let o const) 
2. darle nombre a la variable
3. decirle què va a guardar

*/
let nombreVariable = 'nombre';

// Numèricos

let numero = 3;
const pi = 3.14;

// Texto -> Strings

let texto = 'hola';
const nombre = 'luisa';

// booleanos -> verdadero o falso

let esVerdadero = true; //true -> verdadero
const esFalso = false; //false -> falso

// arreglos -> guardar màs de un dato -> DEL MISMO TIPO
// se reconocen por el uso de [] y los datos se separan por comas
let arregloNumeros = [5, 6, 7, 3, 9];
const arregloNombres = ['luisa', 'manuela', 'daniel'];

//POO -> Programación orientada a objetos
//Objetos -> son datos que representan en CÓDIGO, elementos o cosas de la vida real para que podamos darles instrucciones lógicas

//Todos los elementos de la vida real los podemos definir, en términos de CARACTERÍSTICAS (atributos (código)), de ACCIONES (métodos (código))

/*
    [] -> corchetes con los arreglos de datos
    {} -> llaves los tipos de datos objeto
    () -> métodos -> funciones

    estructura -> clave valor -> los atributos y métodos se separan por comas

    Yo puedo acceder no sólo al objeto completo, sino a sus propiedades y a sus métodos, de forma específica,

    Como:
    nombreObjeto.atributo
    nombreObjeto.método
*/

const persona1 = {
    //clave: valor;
    //Atributos
    nombre: 'Luisa',
    edad:23,
    altura: '170 cm',
    nacionalidad: 'Colombiana',
    //métodos -> funciones
    saludar: function(){
       console.log('Hola desarrolladores')
    },
    despedir: function(){
        console.log('Chao, desarrolladores')
    }

}

let productos = {
    nombre: 'computador',
    precio: 10000,
    cantidad: 20,
    descripcion: 'es muy rápido',
    comprar: function(){
        console.log('comprando producto')
    }
}


// ==================== FUNCIONES =================

/*  
¿CÓMO SE USAN LAS FUNCIONES EN JS?

    1. Declaración típica de funciones
    2. Funciones anónimas -> a funciones sin nombre
    3. Funciones flecha -> los estándares modernos de programación en js

    4. Funciones incorporadas -> funciones que ya vienen establecidas dentro de js, para que nostros los podamos usar

*/

//1. DECLARACIÓN BÁSICA DE FUNCIONES
/* 
    function nombreFuncion(){
        lógica dentro de la funcion
    }

*/

function saludar(){
    console.log('holiiiiiiiiiiiiiiiiiiiiii');
}

//2. FUNCIONES ANÓNIMAS
let despedida = function (){
    console.log('chauuuuuuuuu')
}

//3. FUNCIONES FLECHA -> Forma moderna 

let suma = () => {
    console.log(5+4);
}

// 4. FUNCIONES INCORPORADAS
    /*
    
        alert -> enviarle un mensaje al usuario
        prompt -> es para pedir datos al usuario
        parseInt -> convertir un dato a entero
        parseFloat -> convertir un dato a flotante(decimal)
        console -> nos envía mensaje a la consola del desarrolador
        Math -> nos permite hacer operacione smatemáticas más complejas
    */
