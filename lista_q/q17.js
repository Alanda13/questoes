import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o valor de N: ')
    let soma = 0;

    for (let i = 1; i <= N; i++) {
        soma += 1 / i;
    }
    print('O valor de S é igual a: ' +soma)

}
main()