import {question} from "readline-sync"

function main(){
    console.log('---Turno de Estudo---')
    const turno = question('Digite o turno (M- Matutino) (V - Vespertino): ')

    const resultado = qual_turno(turno)
    console.log(resultado)
}
function qual_turno(turno){
    if (turno.toUpperCase() === 'M'){
        return 'Bom dia!'
    }else if(turno.toUpperCase() === 'V'){
        return 'Boa tarde!'
    }else{
        return 'Valor Inválido!'
    }
}
main()