/**
 * Ejercicio 7 - Crear una función que reciba un número y devuelva si es par o impar.
 */

let numero;

numero = prompt('Introduce un numero entero: ');

function esPar(numero){
    if(numero % 2 == 0){
        console.log('El numero es par.');
    }else {
        console.log('El numero es impar.');
    }
}

esPar(numero);