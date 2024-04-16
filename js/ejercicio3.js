
let numero1 = parseInt(prompt("Por favor, ingresa el primer número entero:"));
let numero2 = parseInt(prompt("Ahora, ingresa el segundo número entero:"));

// Mostrar qué número es mayor
if (numero1 > numero2) {
  console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
} else if (numero2 > numero1) {
  console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
} else {
  console.log("Los dos números son iguales (" + numero1 + " = " + numero2 + ").");
}

// Verificar si ambos números son positivos
if (numero1 > 0 && numero2 > 0) {
  console.log("Ambos números son positivos.");
} else if (numero1 > 0 || numero2 > 0) {
  console.log("Al menos uno de los números es positivo.");
} else {
  console.log("Ambos números son negativos o iguales a cero.");
}

// Verificar si alguno de los números es igual a cero
if (numero1 === 0 || numero2 === 0) {
  console.log("Al menos uno de los números es igual a cero.");
} else {
  console.log("Ninguno de los números es igual a cero.");
}
