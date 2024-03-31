function main() {
    function divisaoSemOperador(dividendo, divisor) {
        if (divisor === 0) {
            console.log("Erro: Divisão por zero.");
            return;
        }

        let quociente = 0;
        let resto = 0;
        let sinal = (dividendo < 0) ^ (divisor < 0) ? -1 : 1; 

        dividendo = Math.abs(dividendo); 
        divisor = Math.abs(divisor); 

        while (dividendo >= divisor) {
            dividendo -= divisor;
            quociente++;
        }

        resto = dividendo;
        quociente *= sinal;

        console.log("Quociente:", quociente);
        console.log("Resto:", resto);
    }
    const num1 = 17;
    const num2 = 5;
    console.log("Dividindo", num1, "por", num2);
    divisaoSemOperador(num1, num2);
}
main();

    
