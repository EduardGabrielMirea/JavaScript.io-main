/**
 * Ejericio 15
 */

function esMayor(numero1, numero2) {
    return numero1 > numero2;
  }
  
  function dameUnNumero() {
    return parseInt(prompt("Dame un número: "));
  }
  
  let numero1, numero2;
  
  do {
    numero1 = dameUnNumero();
    numero2 = dameUnNumero();
    
    if (esMayor(numero1, numero2)) {
      console.log("El primero es mayor");
    }
  } while (esMayor(numero1, numero2));
  
  console.log("El segundo es mayor. FIN de la ejecución");
  