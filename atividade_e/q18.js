import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Operação com dois números---')

    var num1 = get_number('Digite um numero: ')
    var num2 = get_number('Digite um numero: ')
    var operacao = get_number('Operacao a ser executada: \n (1) Adicao \n (2) Subtracao \n (3) Multiplicacao \n (4) Divisao \n : ')
    
    if (operacao === 1){ //Adição
        var resultado = num1 + num2
        console.log('A adição dos dois números é igual a: ',resultado)
    }else if(operacao === 2){//Subtração
        var resultado = num1 - num2
        console.log('A subtração dos dois números é igual a: ',resultado)
    }else if(operacao === 3){//Multiplicação
        var resultado = num1 * num2
        console.log('A multiplicação dos dois números é igual a: ', resultado)
    }else{
        var resultado = num1 / num2
        console.log('A divisão dos dois números é igual a: ',resultado)
    }

}
main()