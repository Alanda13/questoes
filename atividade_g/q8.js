import {question} from "readline-sync"

function main(){
    console.log('---Calculando Descontos ---')
    const valor_hora = Number(question('Valor da sua hora de trabalho: '))
    const horas_trabalhadas = Number(question('Quantidade de horas trabalhadas: '))

    const salario_bruto = valor_hora * horas_trabalhadas
    const descontoIR = percentual_descontoIR(salario_bruto)
    const valor_descontoIR = (descontoIR / 100) * salario_bruto
    const valor_inss = calculo_INSS(salario_bruto)
    const fgts = calculo_fgts(salario_bruto)
    const total_descontos = valor_inss + valor_descontoIR //FGTS não é descontado
    const salario_liquido = salario_bruto - total_descontos
    
    console.log('-------------------------------------')
    console.log('Salário Bruto       : R$', salario_bruto.toFixed(2))
    console.log('IR                  : R$', valor_descontoIR.toFixed(2))
    console.log('(-)INSS (10%)       : R$',valor_inss.toFixed(2) )
    console.log('FGTS (11%)          : R$', fgts.toFixed(2))
    console.log('Total de descontos  : R$', total_descontos.toFixed(2))
    console.log('Salário líquido     : R$',salario_liquido.toFixed(2))
    console.log('--------------------------------------')


}
function percentual_descontoIR(salario_bruto){

    if (salario_bruto <= 900){
        return 'ISENTO' 
    }else if( salario_bruto <= 1500){
        return 5
    }else if (salario_bruto <= 2500){
        return 10
    }else if (salario_bruto > 2500){
        return 20
    }
}
function calculo_INSS(salario_bruto){
    const valor_inss = (10/100) * salario_bruto
    return valor_inss
}
function calculo_fgts(salario_bruto){
    const valor_fgts = (11/100) * salario_bruto
    return valor_fgts
} 
main()