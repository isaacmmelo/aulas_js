const string = "Olá mundo!";
let stringInvertida = "";
  
for (let i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}

console.log(`A string invertida é: ${stringInvertida}`);