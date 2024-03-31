import { get_number } from "../utils/io_utils";

function calcularTermoPA(primeiroTermo, razao, n, contador = 1) {
    if (contador > n) {
        return;
    }

    console.log("Termo " + contador + ": " + primeiroTermo);
    calcularTermoPA(primeiroTermo + razao, razao, n, contador + 1);
}

function main() {
    let primeiroTermo = get_number("Digite o primeiro termo da PA:");
    let razao = get_number("Digite a razão da PA:");
    let n = get_number("Digite a quantidade de termos (N):");

    calcularTermoPA(primeiroTermo, razao, n);
}

main();
