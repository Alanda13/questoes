import {question} from "readline-sync"

function main(){
    console.log('---Verificando Letras ---')
    const a = question('Digite F ou M : ')

    const resultado = verificar(a)
    console.log(resultado)

}

function verificar(a){
    if (a.toUpperCase() === 'F'){
        return 'F - Feminino'
    }else if(a.toUpperCase() === 'M'){
        return 'M - Masculino'
    }else{
        return 'Sexo Inválido'
    }
}
main()