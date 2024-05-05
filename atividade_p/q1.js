import { print, get_number } from "../utils/io_utils.js";

function main() {
    var N = get_number('Numero: ');
    let numeros = "";

    for (let i = 1; i <= N; i++) {
        numeros += i + ",";
    }

    print(numeros);
}

main();