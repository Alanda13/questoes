import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite um numero: ')
    var soma = 0;

    for(let i = 0; i < N; i++) {
        var numero = get_number('Digite um numero :');
        soma += numero;
    }

    var media = soma/ N;

    print('Soma: ', +soma);
    print('Media: ', +media);

}
main()