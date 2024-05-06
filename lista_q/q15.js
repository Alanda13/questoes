import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o valor de N:');
    var sequencia = calculando_sequencia(N);
    print(sequencia);
}
function calculando_sequencia(N) {
    let sequencia = '';
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
        sequencia += soma;
        if (i !== N) {
            sequencia += ', ';
        }
    }
    return sequencia;
}
main()