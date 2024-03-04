import{question} from "readline-sync"


function main(){
    const salario_atual = Number(question('Salario atual: '))

    const percentual = calcular_percentual_aumento(salario_atual)
    const aumento = salario_atual * (percentual / 100)
    const novo_salario = salario_atual + aumento

    console.log('Salário Original: ', salario_atual)
    console.log('Percentual aumento (%): ',percentual)
    console.log('Aumento R$: ', aumento.toFixed(2))
    console.log('Novo salário: ', novo_salario)

}
function calcular_percentual_aumento(valor){
    if (valor <= 280){
        return 20
    }else if( valor <= 700){
        return 15
    }else if( valor <= 1500){
        return 10
    }else{
        return 5 
    }
}
main()

