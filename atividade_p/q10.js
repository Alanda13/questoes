import { print, get_number } from "../utils/io_utils.js";

function main(){
    var limite_superior = get_number('Digite um limite superior: ')
    var limite_inferior = get_number('Digite um limite inferior: ')

    if (limite_inferior % 2 === 0){
        limite_inferior++;
    }

    for (let i = limite_inferior; i <= limite_superior; i += 2){
        print(i);
    }
}
main()