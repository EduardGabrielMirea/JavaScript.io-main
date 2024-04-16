
/**
 * Ejercicio 5
 */
let edad;

edad = prompt('Introduce tu edad: ');

function calculo_edad(){
    if(edad < 0){
        console.log('Edad erronea, tiene que ser superior a 0');
    }else if(edad < 18 ){
        console.log('Menor de edad');
    }else if(edad < 65){
        console.log('Adulto');
    }else if(edad >= 65){
        console.log('Jubilado');
    }
}

calculo_edad();