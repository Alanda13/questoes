import { print, get_number } from "../utils/io_utils.js";

function main(){
    var numero = get_number('Numero: ')

    let fatorial = 1;

    for (let i=1; i<= numero; i++){
        fatorial *= i; 
    }
    print(fatorial)

}
main()