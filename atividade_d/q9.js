import {question} from "readline-sync"
function main(){
    console.log('----Verificando se o numero é primo ou não!!----')
    const numero = Number(question("Digite um numero entre 0 e 100: "))

    const resultado = primo_ou_nao(numero)
    console.log(resultado)
}
function primo_ou_nao (num, divisor=2){
    if (num === 2){
        return 'O número é primo!'
    }else if( num ===1){
        return 'Não é um número primo!'
    }else if (num % divisor === 0){
        return "O número não é primo!"
    }else{
        return "O número é primo!"
    }
}
main()