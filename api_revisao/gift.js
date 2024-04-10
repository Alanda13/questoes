import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    var qtd_compras = get_number('Quantidade de compras: (digite 0 para encerrar) ')

    var faturamento_total = 0;
    var valor_distribuido_cashback = 0;
    var maior_valor_cashback = 0;
    var menor_valor_cashback = 0;
    var num_clientes = 0;


    while(qtd_compras !== 0){
        var nome_cliente = get_text('Nome cliente: ')
        num_clientes ++
        var valor_compras = get_number('Valor compras: ')
        faturamento_total =+ valor_compras
        var valor_cashback = calcular_cashback(valor_compras)
        valor_distribuido_cashback =+ valor_cashback

        if (valor_cashback > maior_valor_cashback){
            maior_valor_cashback = valor_cashback;
        }else if(valor_cashback < menor_valor_cashback){
            menor_valor_cashback = valor_cashback
        }
        qtd_compras = get_number('Quantidade de compras: (digite 0 para encerrar) ')

        
    }
    const percentual_cashback = (valor_cashback/faturamento_total) * 100
    const valor_medio_cashback = valor_cashback / num_clientes

    const resultado = `
    ------------------------------------------------------
    Faturamento Total: R$ ${faturamento_total.toFixed(2)}
    Valor distribuido em cashback: R$ ${valor_distribuido_cashback.toFixed(2)}
    Percentual investido em cashback: R$ ${percentual_cashback.toFixed(2)} %
    Maior valor pago em cashback: RS ${maior_valor_cashback.toFixed(2)}
    Menor valor pago em cashback: R$ ${menor_valor_cashback.toFixed(2)}
    Valor médio pago em cashback : R$ ${valor_medio_cashback.toFixed(2)}
    --------------------------------------------------------`
    print(resultado)

}

function calcular_cashback(valor_compras){
    if (valor_compras <= 250){
        return  valor_compras * 0.05;
    }else if(  valor_compras > 250 && valor_compras <= 500){
        return valor_compras * 0.07;
    }else if(valor_compras > 500 && valor_compras <= 750){
        return valor_compras * 0.08;
    }else{
        return (250 * 0.05) + (250 * 0.07) + (250 * 0.08) + ((valor_compras - 750) * 0.25);
    }

}
main()