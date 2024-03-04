import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Calculando a média---')
    const nota1 = get_number('Digite sua nota 1 : ')
    const nota2 = get_number('Digite sua nota 2: ')

    const media = (nota1 + nota2) / 2

    const resultado = calculando_resultado(nota1, nota2, media)
    console.log(resultado)
}

function calculando_resultado(nota1, not4, media){
    if( media === 10){
        return 'APROVADO COM DISTINÇÃO'
    }else if( media < 7){
        return 'REPROVADO'
    }else {
        return 'APROVADO'
    }
}
main()