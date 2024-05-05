import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o valor de N:');
    var maior;

    for (let i = 0; i < N; i++) {
        var numero = get_number('Digite um numero:');
        if (i === 0 || numero > maior) {
            maior = numero;
        }
    }
    print('Maior numero: '  +maior)
}
main()