import {question} from "readline-sync"

function main(){
    const angulo_1 = Number(question('Digite o angulo 1: '))
    const angulo_2 = Number(question('Digite o angulo 2: '))
    const angulo_3 = Number(question('Digite o angulo 3: '))
                          //argumentos
    if (eh_triangulo(angulo_1, angulo_2, angulo_3)){ //É um triângulo ou não? 
        console.log('É um triangulo!')
       
        const tipo = tipo_triangulo(angulo_1, angulo_2, angulo_3)//Se for um triângulo, qual o tipo?
        console.log(tipo)
        
    }else{
        console.log('Não é um triângulo!')// Não é um triângulo
    }  
}

function eh_triangulo(a1,a2,a3){ //Função para saber se é um triângulo ou não, se a soma dos lados for igual a 180, returna true
    const soma = a1 + a2 + a3

    return soma === 180
}

function tipo_triangulo(a1, a2, a3){  //Função que calssifica o triângulo em acutângulo, retângulo e obtusângulo 
    if (a1 < 90 && a2 < 90 && a3 < 90){
        return 'É um triângulo ACUTÂNGULO!'
    }else if (a1 === 90 || a2 === 90 || a3 === 90){
        return'É um triângulo RETÂNGULO!'
    }else if(a1 > 90 || a2 > 90 || a3 > 90){
        return'É um triângulo OBTUSÂNGULO!'
    }
}

main()
