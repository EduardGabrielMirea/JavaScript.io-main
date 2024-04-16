/**
 * Ejercicio 14
 */

function contarFs(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === 'F') {
        contador++;
      }
    }
    return contador;
  }
  
  function contarCaracteres(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === caracter) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log(contarFs("FFC")); // → 2
  console.log(contarCaracteres("kakkerlak", "k")); // → 4
  