import {question} from "readline-sync"
function main() {
    console.log('---Hipermercado Tabajara---')
    const tipoCarne = question("Digite o tipo de carne (file, alcatra, picanha):").toLowerCase();
    const peso = parseFloat(question("Digite a quantidade de carne em Kg:"));
    const cartaoTabajara = question("A compra será feita com o cartão Tabajara?");

    const cupomFiscal = gerarCupomFiscal(tipoCarne, peso, cartaoTabajara);

    console.log("Cupom Fiscal:");
    console.log("Tipo de Carne: " + cupomFiscal.tipoCarne);
    console.log("Quantidade: " + cupomFiscal.quantidade + " Kg");
    console.log("Preço Total: R$ " + cupomFiscal.precoTotal);
    console.log("Tipo de Pagamento: " + cupomFiscal.tipoPagamento);
    console.log("Valor do Desconto: R$ " + cupomFiscal.valorDesconto);
    console.log("Valor a Pagar: R$ " + cupomFiscal.valorPagar);
}
function calcularValorCompra(tipoCarne, peso) {
    const precos = {
        file: { ate5Kg: 4.9, acima5Kg: 5.8 },
        alcatra: { ate5Kg: 5.9, acima5Kg: 6.8 },
        picanha: { ate5Kg: 6.9, acima5Kg: 7.8 }
    };

    const precoPorKg = (peso <= 5) ? precos[tipoCarne].ate5Kg : precos[tipoCarne].acima5Kg;
    return peso * precoPorKg;
}

function calcularDesconto(valorTotal, cartaoTabajara) {
    if (cartaoTabajara) {
        return valorTotal * 0.05;
    }
    return 0; // Sem desconto
}

function gerarCupomFiscal(tipoCarne, peso, cartaoTabajara) {
    const valorTotal = calcularValorCompra(tipoCarne, peso);
    const desconto = calcularDesconto(valorTotal, cartaoTabajara);
    const valorFinal = valorTotal - desconto;

    return {
        tipoCarne: tipoCarne,
        quantidade: peso.toFixed(2),
        precoTotal: valorTotal.toFixed(2),
        tipoPagamento: cartaoTabajara ? "Cartão Tabajara" : "Dinheiro",
        valorDesconto: desconto.toFixed(2),
        valorPagar: valorFinal.toFixed(2)
    };
}

main();
