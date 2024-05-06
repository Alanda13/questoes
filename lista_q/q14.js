import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite um numero N: ')
    var maior_quadrado = qual_maior_quadrado(N);
    print('Maior quadrado: ' +maior_quadrado)
}
function qual_maior_quadrado(N){
    let maior_quadrado = 0;
    for (let i = 0; i * i <= N; i++) {
        maior_quadrado = i * i;
    }
    return maior_quadrado;
}
main()

