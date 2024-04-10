import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const valor_objetivo = get_number('Valor do objetivo: ')
    const salario = get_number('Salario: ')
    const percentual = get_number('Quantos % pretende investir mensalmente: ')
    const taxa_juros = get_number('Taxa de juros do investimento escolhido: ')

    let saldo = 0;
    let meses = 0;

    while (saldo < valor_objetivo) {
        const aporte = salario * (percentual / 100);
        saldo += aporte;
        saldo *= (1 + taxa_juros / 100);
        meses++;
    }
    const meses_para_objetivo = calcular_em_ano_e_meses(meses)

    const resultado = `
    Você atingirá seu objetivo em:${meses_para_objetivo} `
    print(resultado)
}
function calcular_em_ano_e_meses(meses){
    if (meses > 12){
        const anos = Math.floor(meses/12);
        const meses_restantes = meses % 12;
        return '${anos} anos e ${meses_restantes} meses';
    }else{
        return '${meses}meses ';
    }
}
main()