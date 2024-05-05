import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite um numero N: ')
    var limite_superior = get_number('Digite um limite superior: ')
    var limite_inferior = get_number('Digite um limite inferior: ')
    let resultado = '';

    for(let i = limite_inferior; i <= limite_superior; i++){
        if (i % N === 0){
            resultado += i + ' ';
        }
    }
    print(resultado)

}
main();