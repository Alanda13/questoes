import {question} from "readline-sync"

function main(){
    console.log('---Valor gasto em morangos e maças ---')
    const qtd_morango = Number(question('Quantidade de morango (em kg): '))
    const qtd_maca = Number(question('Quantidade de maçã (em kg): '))

    const preco_morango = calculo_preco_maca(qtd_morango)
    const valor_morango = preco_morango * qtd_morango
    const preco_maca = calculo_preco_maca(qtd_maca)
    const valor_maca = preco_maca * qtd_maca
    const valor_total = valor_morango + valor_maca
    const kg_total = qtd_morango + qtd_maca
    const desconto = calculo_desconto(valor_total, kg_total)
    const valor_desconto = valor_total - desconto


    console.log('Valor total : R$ ', valor_total)
    console.log('Você ganhou um desconto no valor de : R$ ',desconto.toFixed(2))
    console.log('O valor com desconto é igual a: R$', valor_desconto)
    
}
function calculo_preco_morango( qtd_morango){
    if (qtd_morango <= 5){
        return 2.50
    }else if(qtd_morango > 5 ){
        return 2.20
    }
}
function calculo_preco_maca( qtd_maca){
    if (qtd_maca <= 5){
        return 1.80
    }else if(qtd_maca > 5 ){
        return 1.50
    }
}
function calculo_desconto(valor_total, kg_total){
    if (kg_total > 8 || valor_total > 25){
        return (10/100) * valor_total
    }else{
        return 0
    }
}

main()

