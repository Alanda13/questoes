import {question} from "readline-sync"
function main() {
    const litrosVendidos = parseFloat(question("Digite o número de litros vendidos:"));
    const tipoCombustivel = question("Digite o tipo de combustível (A-álcool, G-gasolina):");

    const valorPago = calcularValorPago(litrosVendidos, tipoCombustivel);

    if (isNaN(valorPago)) {
        console.log(valorPago); 
    } else {
        console.log("Valor a ser pago pelo cliente: R$ " + valorPago);
    }
}

function calcularValorPago(litros, tipoCombustivel) {
    const precoAlcool = 1.9;
    const precoGasolina = 2.5;

    function calcularDesconto(litros, descontoAte20, descontoAcima20) {
        return (litros <= 20) ? litros * descontoAte20 : litros * descontoAcima20;
    }

    if (tipoCombustivel.toUpperCase() === 'A') {
        const descontoAlcool = calcularDesconto(litros, precoAlcool * 0.03, precoAlcool * 0.05);
        return (precoAlcool - descontoAlcool).toFixed(2);
    } else if (tipoCombustivel.toUpperCase() === 'G') {
        const descontoGasolina = calcularDesconto(litros, precoGasolina * 0.04, precoGasolina * 0.06);
        return (precoGasolina - descontoGasolina).toFixed(2);
    } else {
        return "Tipo de combustível inválido";
    }
}

main();
