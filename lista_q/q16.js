import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite um valor N(maior ou igual a 2):');
    var a = 0, b = 1;
    print('-----------------------------------------------')
    print('Primeiros termos da sequência de Fibonacci: ');
    print(a);
    print(b);
    print('----------------------------------------------')
    for (let i = 3; i <= N; i++) {
        let c = a + b;
        print(c);
        a = b;
        b = c;
    }
}

main()
