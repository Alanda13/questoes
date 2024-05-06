import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o valor de N: ')
    let soma = 0;
    let sinal = 1;
    
    for (let i = 1; i <= N; i++) {
        soma += sinal * 1 / i;
        sinal *= -1; 
    }
    print('O valor de S é igual a: ' +soma)

}
main()