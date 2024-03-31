import { get_number } from "../utils/io_utils.js"

function jogoDeAdivinhacao() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        let numeroUsuario = get_number("Tente adivinhar o número gerado (entre 1 e 100):");
        tentativas++;

        if (numeroUsuario === numeroAleatorio) {
            acertou = true;
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
        } else if (numeroUsuario < numeroAleatorio) {
            console.log("Maior");
        } else {
            console.log("Menor");
        }
    }
}

jogoDeAdivinhacao();
