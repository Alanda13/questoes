import { print, get_number } from "../utils/io_utils.js";

function main() {
    var A0 = get_number('Valor inicial: ');
    var limite = get_number('Limite: ');
    var R = get_number('Razao: ');

    var resultado = '';

    for (let valor = A0; valor < limite; valor += R){
        resultado += valor + ','
    }   
    print(resultado);
}

main();
