
/**
 * Ejercicio 4
 */
let nota;

nota = prompt('Introduce una nota entera entre 0 y 10.');

/**
 * console.log()
 * El alert printea en una ventana y sirve sobre todo para mandar avisos.
 */
function nombre () {
    if (nota < 0 || nota > 10) {
        console.log('nota no valida');
    } else if(nota < 3) {
        console.log('insuficiente');
    } else if(nota < 5 ) {
        console.log('Regular');
    }else if(nota < 6 ){
        console.log('Suficiente');
    }else if(nota < 7){
        console.log('Bien');
    }else if(nota < 9){
        console.log('Muy Bien');
    }else if(nota <= 10){
        console.log('Excelente');
    }
}

nombre();
