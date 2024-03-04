import {question} from "readline-sync"

function main(){
    console.log('---Dividindo o número em centena, dezena e unidade----')
    var numero = parseInt(question('Digite um numero inteiro menor que 1000: '))
    imprimirDecomposicao(numero);


}
function imprimirDecomposicao(numero) {
    
    var centenas = Math.floor(numero / 100);
    var dezenas = Math.floor((numero % 100) / 10);
    var unidades = numero % 10;

    console.log(numero + " = " + centenas + (centenas === 1 ? " centena" : " centenas") +
                ", " + dezenas + (dezenas === 1 ? " dezena" : " dezenas") +
                " e " + unidades + (unidades === 1 ? " unidade" : " unidades"));
}


main()