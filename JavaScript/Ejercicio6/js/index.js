 // (parametro) sacar el area de un cuadrado
    // (parametro) sacar el area de un rectangulo
    // (parametro) sacar el area de un triangulo
    // (parametro) edad, y decir si es mayor de edad o no
    // (parametro) un numero, decir si es 0, positvo o negatico
    // (parametro) que diga es es vocal o consonante
    // Chellenge de Licencia
    // Preguntar al usuario su edad y decir si puede sacar su licencia para conducir, 
    //su permiso o no es apto ya sea por ser menor o muy mayor.

//


function EjerciciosFunc(){
    let opciones = Number(prompt("Seleccione la opcion deseada \n1 Sacar el Area del cuadrado \n2 Sacar el Area del rectangulo  \n3 Sacar el Area del triangulo \n4 Ingresar Edad \n5 Ingrese el numero para ver si es negativo o positivo \n6 Ingrese una letra para ver si vocal o consonante \n7 Preguntar edad para saber si puede obtener licencia"));
    if (opciones == 1){
        let a = Number(prompt("Ingrese la medida lado del cuadrado"));
        cuadrado(a);
    }else if(opciones ==2){
        let b = Number(prompt("Ingrese la medida del primer lado del rectangulo"));
        let c = Number(prompt("Ingrese la medida del segundo lado del rectangulo"));
        cuadrado(b,c);
    }else if(opciones ==3) {
        let d = Number(prompt("Ingrese la medida del primer lado del triangulo"));
        let e = Number(prompt("Ingrese la medida del segundo lado del triangulo"));
        triangulo(d,e);
    }else if (opciones == 4){
        let f = Number(prompt("Ingresa la Edad"));
        edad(f)
    }else if (opciones == 5){
        let g = Number(prompt("Ingresa el Numero"));
        numero(g);
    }else if (opciones == 6){
        let h = prompt("Ingresa la letra");
        vocal(h);
    }else if (opciones == 7){
        let i = Number(prompt("Ingresa Su Edad para verificar si es apto para obtener licencia"));
        licencia(i)
    }    
    else{
        console.log("Error");
    }
                  
}
function cuadrado(a){
    area = Math.pow(a,2)
    console.log("El area del cuadrado es: "+area)
    return area;
}
function rectangulo(b,c){
    area = b*c;
    console.log(area);
    return area;
}
function triangulo(d,e){
    area = (d*e)/2;
    console.log(area);
    return area;
}

function edad(f){
    if (f >= 18){
        console.log("Es mayor de Edad");
    }else{
        console.log("No es Mayor de Edad, es un chamaco");
    }
}
function numero(g){
    if (g==0){
        console.log('el numero es 0'); 

        }else if(g > 0) {
            console.log('El numero es postivo');

        }else if (g < 0){
            console.log('el numero es negativo');
        }else {
            console.log('Error');
        }
    }
function vocal(h){
    let cadena = h.toLowerCase();
    let letras = ['a', 'e', 'i', 'o', 'u'];
    if (letras.indexOf(cadena) !== -1 ){
        console.log('es una vocal');
    }else{
        console.log('No es una Vocal');

    }
    
}
function licencia(i){
    if (i >= 18 && i < 80){
        console.log("Aun puedes obtener tu licencia");
    }else{
        console.log("Lo siento no tiene una edad para tener licencia");
    }
}


EjerciciosFunc();



