numeros = [1, 2, 3, 4, 5, 7, 8, 9];
let menorImpar = null;
for (const numero of numeros) {
    if (numero % 2 !== 0) {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

console.log(`O menor número ímpar do array é: ${menorImpar}`);
