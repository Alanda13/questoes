import {  get_number, print } from '../utils/io_utils.js'

function main(){
    let renda_mensal = get_number('Renda mensal: ')
    let valor_emprestimo = get_number('Valor do emprestimo: ')
    let prazo = get_number('Prazo: (em meses)')

    let salario_minimo = 1100;
    if (valor_emprestimo < salario_minimo){
        return 'Valor do empréstinmo deve ser de um salário mínimo!'
    }

    let iof = valor_emprestimo * 0.0038 + (prazo * 0.000082 * valor_emprestimo);
    let selic = 0.1375; 
    let taxa_juros;
    if (prazo <= 6) {
        taxa_juros = 0.5 * selic;
    } else if (prazo <= 12) {
        taxa_juros = 0.75 * selic;
    } else if (prazo <= 18) {
        taxa_juros = selic;
    } else {
        taxa_juros = 1.3 * selic;
    }

    let juros = valo * taxa_juros;
    let valor_total = valor_emprestimo + iof + juros;
    let valorParcela = valorTotal / prazo;
    let comprometimento = (valorParcela / rendaMensal) * 100;

    let statusEmprestimo = (valorParcela <= 0.4 * renda_mensal) ? "APROVADO" : "NEGADO";
    
    const resultado = `
    --------------------------------------------------
    Valor Pedido: R$ ${valor_emprestimo.toFixed(2)};
    Valor do IOF: R$ ${iof.toFixed(2)};
    Valor dos Juros a pagar: R$ ${juros.toFixed(2)};
    Valor Total a pagar: R$ ${valor_total.toFixed(2)};
    Valor da Parcela Mensal:  ${valorParcela.toFixed(2)};
    Comprometimento da Renda Mensal: ${comprometimento.toFixed(2)} %;
    Empréstimo: ${statusEmprestimo};
    --------------------------------------------------
    `
    print(resultado)

}
main()