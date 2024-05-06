import { print, get_number } from "../utils/io_utils.js";

function main() {
    var N = get_number('Número de habitantes: ');

    var totalSalario = 0;
    var totalFilhos = 0;
    var contadorSalarioAteMil = 0;

    for (let i = 1; i <= N; i++) {
        var salario = get_number('Salário do habitante (em R$): ');
        var numFilhos = get_number('Número de filhos do habitante:  ');

        totalSalario += salario;
        totalFilhos += numFilhos;

        if (salario <= 1000) {
            contadorSalarioAteMil++;
        }
    }

    var mediaSalario = totalSalario / N;
    var mediaFilhos = totalFilhos / N;
    var percentualSalarioAteMil = (contadorSalarioAteMil / N) * 100;

    print('Média de salário da população: R$ ' + mediaSalario.toFixed(2));
    print('Média de número de filhos: ' + mediaFilhos.toFixed(2));
    print('Percentual de pessoas com salário de até R$ 1.000,00: ' + percentualSalarioAteMil.toFixed(2) + '%');
}

main();
