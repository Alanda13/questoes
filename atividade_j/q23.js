import { get_number} from '../utils/io_utils.js'
function calcularTermoPG(primeiroTermo, razao, n) {
    if (n === 1) {
        console.log("Termo " + n + ": " + primeiroTermo);
        return;
    }

    console.log("Termo " + n + ": " + primeiroTermo);
    calcularTermoPG(primeiroTermo * razao, razao, n - 1);
}

function main() {
    let primeiroTermo = get_number("Digite o primeiro termo da PG:");
    let razao = get_number("Digite a razão da PG:");
    let n = get_number("Digite a quantidade de termos (N):");

    calcularTermoPG(primeiroTermo, razao, n);
}

main();
