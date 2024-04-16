/**
 * Ejercicio 8  
 * 
 * Crea una función que reciba un array de nombres y devuelva un array con sus iniciales.
 */
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

function mostrarMeses(meses){
    for (let index = 0; index < meses.length; index++) {
        let element = meses[index];
        console.log(element);
    }
}

mostrarMeses(meses);