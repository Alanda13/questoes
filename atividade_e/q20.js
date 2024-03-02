import {question} from "readline-sync"

function main(){
    var angulo = Number(question('Digite um angulo (entre 0 e 360 graus): '))

    var resultado = qual_quadrante(angulo)
    console.log(resultado)
}
function qual_quadrante(angulo){
    if(angulo >= 0 && angulo < 90){
        return 'Ângulo está no primeiro quadrante!'
    }else if(angulo >= 90 && angulo < 180){
        return 'Ângulo está no segundo quadrante!'
    }else if (angulo >= 180 && angulo < 270){
        return 'Ângulo está no terceiro quadrante!'
    }else{
        return 'Ângulo está no quarto quadrante!'
    }
}
main()