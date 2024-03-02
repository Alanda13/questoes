import {question} from "readline-sync"

function main(){
    const opcao = Number(question('Qual opcao voce escolhe? \n (1) \n (2) \n (3)\n : '))
    const num1 = Number(question('Digite um numero: '))
    const num2 = Number(question('Digite um numero: '))
    const num3 = Number(question('Digite um numero: '))

    const resultado = opcao_escolhida(opcao, num1, num2, num3)
    console.log(resultado)

}
function opcao_escolhida(opcao,num1, num2, num3){
    if (opcao === 1){
        return 'Seu número escolhido foi o: '+ num1;
    }else if(opcao ===2){
        return 'Seu número escolhido foi o: '+ num2;
    }else if(opcao == 3){
        return 'Seu número escolhido foi o: '+ num3;
    }else{
        return 'Opção inválida!'
    }
}
main()