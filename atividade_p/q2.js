import { print, get_number } from "../utils/io_utils.js";

function main() {
    var N = get_number('Numero: ');
    let numeros = "";

    for (let i = 2; i <= N; i+=2) {
        numeros += i + ",";
    }

    print(numeros);
}

main();
