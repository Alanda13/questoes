import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Produto mais barato---')
    const produto1 = get_number('Valor do produto 1: ')
    const produto2 = get_number('Valor do produto 2: ')

    const resultado = mais_barato(produto1, produto2)
    console.log(resultado)
}
function mais_barato(produto1, produto2){
    if (produto1 < produto2){
        return 'Produto 1 deve ser comprado!'
    }else if( produto1 > produto2){
        return 'Produto 2 deve ser comprado!'
    }else{
        return 'Os dois possuem preços iguais!'
    }
}
main()