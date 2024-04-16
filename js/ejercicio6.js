/**
 * Ejercicio 6
 */

let nombre;

nombre = prompt('Introduce tu nombre');

function saludar(nombre){
    console.log('Bienvenid@'+ ' '+[nombre]+'.');
}

saludar(nombre);

let edad;

edad = prompt('Introduce tu edad: ');

function calculo_edad(edad){
    if(edad < 0){
        console.log('Edad erronea, tiene que ser superior a 0');
    }else if(edad < 18 ){
        console.log('Tienes '+ edad + ' años, estás/eres Menor de edad');
    }else if(edad < 65){
        console.log('Tienes '+ edad + ' años, estás/eres Adulto');
    }else{
        console.log('Tienes '+ edad + ' años, estás/eres Jubilado');
    }
}

calculo_edad(edad);

let nota;

nota = prompt('Introduce una nota entera entre 0 y 10');

function calculo_nota (nota) {
    if (nota < 0 || nota > 10) {
        console.log('nota no valida');
    } else if(nota < 3) {
        console.log('Has sacado un insuficiente');
    } else if(nota < 5 ) {
        console.log('Has sacado un regular');
    }else if(nota < 6 ){
        console.log('Has sacado un suficiente');
    }else if(nota < 7){
        console.log('Has sacado un bien');
    }else if(nota < 9){
        console.log('Has sacado un muy bien');
    }else if(nota <= 10){
        console.log('Has sacado un excelente');
    }
}

calculo_nota(nota);