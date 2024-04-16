/**
 * Ejercicio 10
 */

for (let i = 1; i <= 7; i++) {
    let linea = '';
    if (i % 2 === 0) {
      linea = '+'.repeat(i);
    } else {
      linea = '#'.repeat(i);
    }
    console.log(linea);
  }
  