import { print } from '../utils/io_utils.js'

function main(){
    const emprestimo = 3000;
    const pagamento_diario = 200;

    let saldo = emprestimo;
    let dias_uteis = 0;

    while (saldo > 0) {
        saldo *= (1 + 0.0085); 
        saldo -= pagamento_diario;
        if (saldo > 0) {
            dias_uteis++;
        }
    } 
    const resultado = `Serão necessários ${dias_uteis} dias úteis para concluir o fim do pagamento do emprestimo`
    print(resultado)
    
}
main()
