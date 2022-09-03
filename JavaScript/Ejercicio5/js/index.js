// Challege pro  -> Si terminan rapido
// hacer un tablero de ajedrez 
// ' ' # ' ' # ' ' #
//  # ' ' # ' ' # ' '
// ' ' # ' ' # ' ' #
//  # ' ' # ' ' # ' '
// ' ' # ' ' # ' ' #
//  # ' ' # ' ' # ' '

let ajedrez = '';
for (x=0;x<8;x++){
    for(y=0;y<4;y++){
            ajedrez+=" ''  # ";
    }
    ajedrez += '\n';
}
console.log(ajedrez);
