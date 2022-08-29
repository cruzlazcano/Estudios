var n=prompt("ingresa el numero")
var datos = String;
function par_impar(n) {
    if (!isNaN(n)){
        if (n % 2 === 0){
            datos=console.log("El numero es par")
        }
        else {
            datos=console.log("el numero no es par")
        }

    }else {
        datos=console.log("El valor ingresado no es un numero")
    }
  
  }

par_impar(n);
