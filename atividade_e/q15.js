import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Calculando qual o maior salário---')
    var horas1 =  get_number('Quantidade de horas de aula do professor 1: ')
    var valor_hora1 = get_number('Valor por hora recebido do professor 1: ')
    var horas2 =  get_number('Quantidade de horas de aula do professor 2: ')
    var valor_hora2 = get_number('Valor por hora recebido do professor 2: ')

    var salario_1 = horas1 * valor_hora1
    console.log('Salário do professor 1: ',salario_1)

    var salario_2 = horas2 * valor_hora2
    console.log('Salário do professor 2: ', salario_2)

    var resultado = maior_salario(salario_1, salario_2)
    console.log(resultado)
    }
    
    function maior_salario(salario_1, salario_2){
        if (salario_1 > salario_2){
            return 'O professor 1 tem o salário maior!'
        }else{
            return 'O professor 2 tem o salário maior!'
        }
    }
    main()
