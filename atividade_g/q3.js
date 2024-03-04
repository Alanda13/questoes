import {question} from "readline-sync"

function main(){
    console.log('---Verificando se é vogal ou consoante---')
    const letra = question('Digite uma letra: ')

    const resultado = vogal_ou_consoante(letra)
    console.log(resultado)
}
function vogal_ou_consoante(letra){
    if(letra.toUpperCase() === 'A' || letra.toUpperCase() === 'E' || letra.toUpperCase() === 'I' || letra.toUpperCase() === 'O' || letra.toUpperCase() === 'U' ){
        return 'A letra digitada é uma VOGAL!'
    }else{
        return 'A letra digitada é uma CONSOANTE!'
    }

   }
   main()