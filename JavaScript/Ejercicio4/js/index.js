// Challege2
// FizzBuzz
// recorrecorer los numeros del 1 - 100
// si el numero es divisible entre 3 --> '3: fizz'
// si el numero es divisible entre 5 --> '5: buzz'
// si el nuermo es divible entre 5 y 3 --> '15: fizzbuzz'
// '14' 
//15 -> fiz
// 15 -> buzz

for (let x = 1; x<=100;x++){
    if (x % 3==0 && x % 5 ==0 ){
        console.log("El numero"+" "+ x +":FizzBuzz");
    }
    else if (x % 5 == 0){
        console.log("El numero"+" "+ x +":Buzz");
    }
    else if (x % 3 == 0){
        console.log("El numero"+" "+ x +":Fizz");
    }
    else{
        console.log(x);
    }
}
