import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite um numero: ')
    var soma = 0;
    var resultado = '';

    for (let i = 1; i <= N; i++) {
        soma += i;
        resultado += i;
        if (i < N) {
            resultado += " + ";
        }
    }

    print( resultado + " = " + soma);
}
main()