import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o valor de N: ')
    let soma = 0;
    let numerador = 1;
    
    for (let i = 1; i <= 50; i++) {
        soma += numerador / i;
        numerador += 2; 
    }
    print('O valor de S é igual a: ' +soma)

}
main()