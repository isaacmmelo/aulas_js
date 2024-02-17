const palavra = "ovo";

const palavraInvertida = palavra.split("").reverse().join("");

const ehPalindromo = palavra === palavraInvertida;

console.log(`A palavra "${palavra}" ${ehPalindromo ? "é" : "não é"} um palíndromo.`);
