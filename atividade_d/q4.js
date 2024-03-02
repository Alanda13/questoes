import {question} from "readline-sync"

 function main(){
    //Entrada
    const numero = Number(question('Digite um numero de dois digitos: '))  

    //Verificando qual a unidade e dezena do número
    const dezena = Math.floor(numero/10)
    console.log('Dezena:',dezena)
    const unidade = numero % 10
    console.log('Unidade:',unidade)

    //Verificando se são iguais ou não 
    if (dezena === unidade){
        console.log('A unidade e a dezena são iguais!')
    }else{
        console.log('A unidade e a dezena são iguais.')
    }
 }
 main()