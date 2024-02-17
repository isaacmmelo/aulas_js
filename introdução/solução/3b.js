numeros = [10, 20, 100, 300, 1000]
let maiorNumero = numeros[0];
  
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
    }
}

console.log(`O maior número do array é: ${maiorNumero}`);