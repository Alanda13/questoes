import { print, get_number } from "../utils/io_utils.js";

function main(){
    var limite_superior = get_number('Digite um limite superior: ')
    var limite_inferior = get_number('Digite um limite inferior: ')

    for (let i = limite_inferior; i <= limite_superior; i++) {
        if (num_primo(i)) print(i);
}
}
function num_primo(numero){
    if (numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
}
main();