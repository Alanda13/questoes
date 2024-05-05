import { print, get_number } from "../utils/io_utils.js";

function main() {
    var A0 = get_number('Valor inicial: ');
    var Limite = get_number('Limite: ');
    var R = get_number('Razão: ');

    let resultado = '';

    for (let valor = A0; valor < Limite; valor *= R) {
        resultado += valor + ' ';
    }
    print(resultado);
}

main();

