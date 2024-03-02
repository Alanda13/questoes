import {question} from "readline-sync"
function main(){
    console.log('---Verificando se a data é válida---')
    const dia = Number(question('Digite o dia: '))
    const mes = Number(question('Digite o mes: '))
    const ano = Number(question('Digite o ano: '))

    const resultado = data_valida_ou_nao(dia, mes, ano)
    console.log(resultado)
}
function data_valida_ou_nao(dia, mes, ano){
    if ( dia < 1 || dia > 30 ){
        return 'Data não válida'
    }else if( mes < 1 || mes > 12){
        return 'Data não válida!'
    }else if( ano < 1 || ano > 9999 ){
        return 'Data não válida'
    }else{
        return 'Data não válida!'
}
}
main()