/**
 * Ejercicio 16
 */

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetraDNI(numeroDNI) {
  return letras[numeroDNI % 23];
}

function esNumeroValido(numero) {
  return numero >= 0 && numero <= 99999999;
}

let numeroDNI;
let letraDada;
let letraCalculada;

do {
  numeroDNI = parseInt(prompt("Introduce el número de tu DNI: "));
} while (!esNumeroValido(numeroDNI));

/**
letraDada = prompt("Introduce la letra de tu DNI: ").toUpperCase(); // Convertir a mayúsculas para comparar correctamente
letraCalculada = calcularLetraDNI(numeroDNI);

if (letraDada === letraCalculada) {
  console.log("La letra proporcionada es CORRECTA.");
} else {
  console.log("La letra proporcionada es INCORRECTA. La letra correcta es: " + letraCalculada);
}
*/

letraCalculada = calcularLetraDNI(numeroDNI);
console.log("La letra de tu DNI es: " + letraCalculada);