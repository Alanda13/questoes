import {question} from "readline-sync"

function main() {
    console.log('---Calculando Média---')
    var nota1 = parseFloat(question("Digite a nota 1:"));
    var nota2 = parseFloat(question("Digite a nota 2:"));

    var media = calculandoMedia(nota1, nota2);
    var conceito = atribuirConceito(media);
    var status = determinarStatus(conceito);

    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media.toFixed(2));
    console.log("Conceito: " + conceito);
    console.log("Status: " + status);
}
function calculandoMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
function atribuirConceito(media) {
    if (media >= 9.0 && media <= 10.0) {
        return "A";
    } else if (media >= 7.5 && media < 9.0) {
        return "B";
    } else if (media >= 6.0 && media < 7.5) {
        return "C";
    } else if (media >= 4.0 && media < 6.0) {
        return "D";
    } else {
        return "E";
    }
}
function determinarStatus(conceito) {
    return (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";
}
main()

