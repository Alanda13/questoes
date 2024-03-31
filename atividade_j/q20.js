import { get_text } from "../utils/io_utils";

function calcularDesempenhoCarro() {
    let distanciaTotal = 600;
    let distanciaPercorrida = 0;
    let litrosConsumidosTotal = 0;

    while (distanciaPercorrida < distanciaTotal && litrosConsumidosTotal < 50) {
        let distanciaMedicao = get_text("Digite a distância percorrida desde a última medição (em km):");
        let litrosConsumidos = get_text("Digite a quantidade de litros consumidos para percorrer a distância indicada:");

        distanciaPercorrida += distanciaMedicao;
        litrosConsumidosTotal += litrosConsumidos;
    }

    let consumoKmPorLitro = distanciaPercorrida / litrosConsumidosTotal;

    if (distanciaPercorrida >= distanciaTotal) {
        console.log("O carro chegou ao seu destino.");
    } else if (litrosConsumidosTotal >= 50) {
        console.log("O carro parou antes de chegar por falta de combustível.");
    }

    console.log(`O consumo do carro é de ${consumoKmPorLitro.toFixed(2)} km/l.`);
}

calcularDesempenhoCarro();
