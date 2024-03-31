import { get_number, get_text, print } from '../utils/io_utils.js'

function main() {
    let num_prova = get_number('Numero da prova: ');
    let qtd_nadadores = get_number('Quantidade de nadadores: ');

    let totalPontosA = 0;
    let totalPontosB = 0;

    while (qtd_nadadores !== 0 || num_prova !== 0) {
        let contador = 0;
        while (contador < qtd_nadadores) {
            let nome = get_text('Nome nadador: ');
            let classificacao = get_number('Classificacao: ');
            let tempo = get_number('Tempo: ');
            let clube = get_text('Clube: (A ou B)').toUpperCase();

            const pontos_obtidos = quantidade_pontos(classificacao);

            if (clube === 'A') {
                totalPontosA += pontos_obtidos;
            } else if (clube === 'B') {
                totalPontosB += pontos_obtidos;
            }
            contador++;
        }

        // Próxima rodada de entrada
        num_prova = get_number("Numero da proxima prova: (ou 0 para sair):");
        qtd_nadadores = get_number("Quantidade de nadadores: (ou 0 para sair):");
    }

    const vencedor = calcular_vencedor(totalPontosA, totalPontosB);

    const resultado = `
    Total de pontos do clube A: ${totalPontosA}
    Total de pontos do clube B : ${totalPontosB}
    Clube vencedor: ${vencedor}`;

    print(resultado);
}


function quantidade_pontos(classificacao){
    if (classificacao === 1){
        return 9;
    }else if(classificacao === 2){
        return 6;
    }else if(classificacao === 3){
        return 4;
    }else if(classificacao === 4){
        return 3;
    }else{
        return 0;
    }


}
function calcular_vencedor(totalPontosA, totalPontosB){
    if (totalPontosA > totalPontosB){
        return "Clube A venceu!!"
    }else if(totalPontosB > totalPontosA){
        return "Clube B venceu!!"
    }else{
        return "Empate!"
    }
}
main()