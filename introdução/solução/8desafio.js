const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let somaPares = 0;
let multiplicacaoImpares = 1;

for (const numero of numeros) {
    if (numero % 2 === 0) {
    somaPares += numero;
    } else {
    multiplicacaoImpares *= numero;
    }
}

console.log(`Soma dos números pares: ${somaPares}`);
console.log(`Multiplicação dos números ímpares: ${multiplicacaoImpares}`);