import {question} from "readline-sync"

function get_number(texto) {
    const numero = Number(question(texto))
    return numero
}
function main(){
    console.log('---Verificando se o número é par ou ímpar---')
    var numero = parseInt( get_number('Digite um numero inteiro: '))

    var resultado = eh_par(numero)
    console.log(resultado)
}
function eh_par(numero){
    if (numero % 2 === 0){
        return 'O número é PAR!'
    }else{
        return 'O número é ÍMPAR!'
    }
}
main()