import {  get_number, print } from '../utils/io_utils.js'

function main(){
    const largura = get_number('Largura da piscina em cm: ')
    const comprimento = get_number('Comprimento da piscina em cm : ')
    const profundidade = get_number('Profundidade da piscina em cm : ')
    const valor_pago =  get_number('Valor a ser pago por cada 1000 litros: ')

    const capacidade_maxima = largura * comprimento * profundidade
    const capacidade_litros = capacidade_maxima/1000
    const capacidade_85_porcento = 85/100 * capacidade_litros
    const gasto_para_encher_piscina = calcular_gasto_para_encher_piscina(valor_pago, capacidade_litros)
    const gasto_por_mes = calcular_repor_mensalmente(capacidade_85_porcento)

    const resultado = `
    ----------------------------------------------------
    Capacidade máxima recomendada é: ${capacidade_85_porcento.toFixed(2)} litros
    Gasto para encher a piscina: ${gasto_para_encher_piscina.toFixed(2)} reais
    Gasto mensal para manter a piscina no nível ideal:${gasto_por_mes.toFixed(2)} reais
    ---------------------------------------------------- `
    print(resultado)
}
function calcular_gasto_para_encher_piscina(valor_pago, capacidade_85_porcento){
    return (capacidade_85_porcento / 1000) * valor_pago;
    
}
function calcular_repor_mensalmente(capacidade_85_porcento){
    return  (capacidade_85_porcento / 10);
   
}
main()