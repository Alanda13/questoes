import { question } from "readline-sync";

function fazerPergunta(pergunta) {
    var resposta = question(pergunta).toLowerCase();
    return resposta === "sim";
}

function main() {
    var respostasSim  = 0;

    if (fazerPergunta("Telefonou para a vitima? ")) {
        respostasSim = respostasSim + 1;
    }
    if (fazerPergunta("Esteve no local do crime? ")) {
        respostasSim = respostasSim + 1;
    }
    if (fazerPergunta("Mora perto da vitima? ")) {
        respostasSim = respostasSim + 1;
    }
    if (fazerPergunta("Devia para a vitima? ")) {
        respostasSim = respostasSim + 1;
    }
    if (fazerPergunta("Já trabalhou com a vitima? ")) {
        respostasSim = respostasSim + 1;
    }

    // Resultado
    if (respostasSim === 5) {
        console.log("Assassino");
    } else if (respostasSim >= 3 && respostasSim <= 4) {
        console.log("Cúmplice");
    } else if (respostasSim === 2) {
        console.log("Suspeita");
    } else {
        console.log("Inocente");
    }
}

main();
