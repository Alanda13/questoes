import {question} from "readline-sync"

function main(){
    console.log('---Calculando o maior número---')
    
    //Entrada das variáveis 
    const num1 = Number(question('Digite um numero: '))
    const num2 = Number(question('Digite um numero: '))
    const num3 = Number(question('Digite um numero: '))
    
    //Chamando a função que vai calcular qual o maior número
   const Maior_numero = qual_maior_numero(num1, num2, num3)
   console.log(Maior_numero)
       
} //Função que calcula qual o maior número
function qual_maior_numero(num1, num2, num3){
    if (num1 === num2 && num2 === num3){
        return 'Os numeros são iguais!'
    }else if (num1 >= num2 && num1 >= num3){
        return 'O maior número é o '+ num1;
    }else if (num2 >= num1 && num2 >= num3){
        return 'O maior número é o '+ num2;
    }else{
        return  'O maior número é o '+ num3;
    }

}
main()