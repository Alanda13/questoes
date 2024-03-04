import {question} from "readline-sync"

function main(){
    console.log('---Calculando se é decimal ou inteiro---')
    const numero = Number(question('Digite um numero: '))

    if (numero % 1 === 0 ){
        console.log('É um número inteiro!')
    }else{
        console.log('É um número decimal!')
    }
}
main()