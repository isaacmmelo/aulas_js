function pularlinha(){
    console.log("");
    console.log("---------------------------------------------");
    console.log();
}
pularlinha();

/** 
 * OPERAÇÕES ARITMÉTICAS 
 * */
function operacoesAritmeticas(num1, num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;
  
    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
}
// Exemplo de uso
operacoesAritmeticas(5, 3);
pularlinha();

function calcularMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
  
    console.log(`A média dos números ${num1}, ${num2} e ${num3} é: ${media}`);
}
// Exemplo de uso
calcularMedia(10, 5, 7);
pularlinha();

/** 
 * ESTRUTURAS DE REPETIÇÃO 
 * */
function for1a10(){
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Exemplo de uso
for1a10();
pularlinha();

function while1a10(){
    i = 1;
    while (i <= 10){
        console.log(i);
        i++;
    }
}
// Exemplo de uso
while1a10();
pularlinha();

function calcularFatorial(numero) {
    let fatorial = 1;
  
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
 }
// Exemplo de uso
calcularFatorial(7);
pularlinha();

/**
 * ARRAYS
 */
function somaArray(num1, num2, num3, num4, num5){
    numeros = [num1, num2, num3, num4, num5];
    let soma = 0;

    for (const numero of numeros) {
    soma += numero;
    }

    console.log(`A soma dos números do array é: ${soma}`);

}
// Exemplo de uso
somaArray(10,20,30,40,50)
pularlinha();

function encontrarMaiorNumero(numeros1) {
    let maiorNumero = numeros1[0];
  
    for (let i = 1; i < numeros1.length; i++) {
      if (numeros1[i] > maiorNumero) {
        maiorNumero = numeros1[i];
      }
    }
  
    return maiorNumero;
}

// Exemplo de uso
const numeros1 = [10, 5, 2, 7, 100];
const maiorNumero = encontrarMaiorNumero(numeros1);
console.log(`O maior número do array é: ${maiorNumero}`);
pularlinha();

/**
 * Strings
 */
function contarCaracteres(string) {
    return string.length;
}
  
// Exemplo de uso
const string = "Olá mundo!";
const numeroCaracteres = contarCaracteres(string);
console.log(`A string "${string}" possui ${numeroCaracteres} caracteres.`);  
pularlinha();

function inverterString(string) {
    let stringInvertida = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
  
    return stringInvertida;
}

// Exemplo de uso
const string2 = "Olá mundo!";
const stringInvertida = inverterString(string2);
console.log(`A string invertida é: ${stringInvertida}`);
pularlinha();

/**
 * Estruturas condicionais
 */
function determinarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log(`O número ${numero} é par.`);
    } else {
      console.log(`O número ${numero} é ímpar.`);
    }
}
// Exemplo de uso
determinarParImpar(11);
pularlinha();

function verificarBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      console.log(`O ano ${ano} é bissexto.`);
    } else {
      console.log(`O ano ${ano} não é bissexto.`);
    }
} 
// Exemplo de uso
verificarBissexto(2024);
pularlinha();

/**
 * Combinação de conceitos
 */
function encontrarMenorImpar(numeros3) {
    let menorImpar = null;
  
    for (const numero3 of numeros3) {
      if (numero3 % 2 !== 0) {
        if (menorImpar === null || numero3 < menorImpar) {
          menorImpar = numero3;
        }
      }
    }
  
    return menorImpar;
}
// Exemplo de uso
const numeros3 = [1, 2, 3, 4, 5, 7, 8, 9];
const menorImpar = encontrarMenorImpar(numeros3);
console.log(`O menor número ímpar do array é: ${menorImpar}`);
pularlinha();

function inverterPalavras(frase) {
    const palavras = frase.split(" ");
    const fraseInvertida = palavras.reverse().join(" ");
  
    return fraseInvertida;
}

// Exemplo de uso
const frase = "Olá mundo! Isto é meio difícil";
const fraseInvertida = inverterPalavras(frase);
console.log(`A frase invertida é: ${fraseInvertida}`);
pularlinha();

/**
 * Array e String
 */
function removerDuplicados(array) {
    const set = new Set(array);
    const arraySemDuplicados = Array.from(set);
  
    return arraySemDuplicados;
}

// Exemplo de uso
const array = [1, 2, 3, 3, 4, 5, 5, 1];
const arraySemDuplicados = removerDuplicados(array);
console.log(`O array sem duplicados é: ${arraySemDuplicados}`);
pularlinha();

function verificarPalindromo(palavra) {
    const palavraInvertida = palavra.split("").reverse().join("");
  
    return palavra === palavraInvertida;
}

// Exemplo de uso
const palavra = "banana";
const ehPalindromo = verificarPalindromo(palavra);
console.log(`A palavra "${palavra}" ${ehPalindromo ? "é" : "não é"} um palíndromo.`);
pularlinha();

/**
 * Desafio
 */
function calcularSomaParesMultiplicacaoImpares(numeros4) {
    let somaPares = 0;
    let multiplicacaoImpares = 1;

    for (const numero4 of numeros4) {
        if (numero4 % 2 === 0) {
        somaPares += numero4;
        } else {
        multiplicacaoImpares *= numero4;
        }
    }

    return {
        somaPares,
        multiplicacaoImpares,
    };
}

// Exemplo de uso
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = calcularSomaParesMultiplicacaoImpares(numeros4);
console.log(`Soma dos números pares: ${resultado.somaPares}`);
console.log(`Multiplicação dos números ímpares: ${resultado.multiplicacaoImpares}`);