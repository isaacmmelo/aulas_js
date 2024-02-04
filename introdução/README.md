# Uma introdução a JavaScript
Para as aulas de TADW do Instituto Federal Goiano

> **💡 DICA**  
Você pode utilizar o site [PlayCode JS](https://playcode.io/javascript) para rodar os códigos abaixo


## Curiosidades do Java Script
### Espaços em branco e quebra de linha
O JavaScript não considera espaços em brancos nem quebras de linha como parte do código útil, portanto pode-se utilizar a vontade de espaçamento e deixar o código do jeito que fique mais fácil para você entender <br />

> **💡 DICA**  
Mantenha o código sempre identado e com um estilo bem definido, isso facilita o entendimento e a manutenção

### Case Sensitive
O Java Script é uma linguagem Case Sensitive, isso significa que diferencias as letras maiúsculas das letas minúsculas, se tivermos uma variável como o nome de "coisa" ela é diferente da variável de nome "Coisa". Vamos ver o exemplo abaixo:
```js
const coisa = "minúsculo"
const Coisa = "MAIÚSCULO"

console.log(coisa)
console.log(Coisa)
```
Temos duas variáveis, uma com a primeira letras minúscula e outra com a primeira letra maiúscula, o JS vai entender como duas variáveis diferentes, portanto, imprimindo dois valores diferentes:
Saída no console da aplicação:
```
minúsculo
MAIÚSCULO
```

### Literal
Literal é qualquer valor digitado no código fonte. A linguagem permite digitar qualquer valor durante a execução do código:
```js
5
"Teste"
['a','b']
5 * 5
```
### Identificadores
Identificador é qualquer sequência de caracter utilizada para identificar variáveis, funções ou objetos. Pode-se iniciar com uma letra, sinal de dólar ($) ou underline (_).
O sinal de dólar normalmente é utilizado para referenciar a objetos DOM e o sinal de underline é utilizado para variáveis globais.
```js
teste = '😀'
TESTE = '😄'
_teste = '🥰'
$teste = '😚'
```
> **💡 DICA**  
O JavaScript é compatível com unicode, então pode-se utilizar os emoticons padrões dessa codificação: [Lista dos Emojis Unicode](https://unicode.org/emoji/charts/full-emoji-list.html#1f642)

### Comentários
Para comentar códigos no java script podemos fazer de duas maneiras, em bloco ou por linha:
```js
// Para comentários em linhas utilizamos duas barras

/*
  Para comentários em bloco, utilizamos uma barra e um asterísticos para abrir o bloco e um asterístico barra para fechar o bloco
*/
```
> **💡 DICA**  
Comentários é umas das ferramentas mais poderosas da informática, use a abuse desse recurso 😉

### Ponto e vírgula?
Em algumas linguagens o ; (ponto e virgula) é obrigatório para delimitar o fechamento de uma linha.
No JavaScript ele é opcional, isso mesmo, você coloca somente se quiser.
```js
console.log("Assim funciona")
console.log("Assim também 😁");
```

## Variáveis
As variáveis são valores assinados a um identificador, com essa referênciam, você pode usar esse valor a qualquer momento durante o programa.
Para declarar uma variável, basta declararmos um identificador seguido de um sinal de igual (=) e o valor que desejamos:
```js
a = 0
b = 1
c = 2
d = 3
/*
  Neste exemplo temos 04 variáveis declaradas
  Cada uma com um valor e identificadores diferentes
*/
```
A única regra é que a variável deve ser declarada antes do seu uso.
```js
console.log(a)
const a = 0
// Isso não irá funcionar, pois a declaração da variável está após o uso.
```
Temos 02 modificadores de variáveis que podemos utilizar no JavaScript, o const e o let
### const
Define uma referência constante a um valor. Isso significa que a referência não pode ser alterada. Não é possível atribuir um novo valor a ela.
```js
//Um exmeplo do que não podemos fazer é isto, o valor de a não será alterado
//Um erro será declarado: TypeError: Assignment to constant variable
const a = 0
a = 1
```
### let
Quando usamos let, podemos alterar o valor da variável. O let também não pe obrigatório ser colocado antes de variável, qualquer declaração feita sem o const e o let, será entendida como let.
```js
let a = 0
a = 1
```
Um outro detalhe é que variáveis do tipo let podem ser inicializadas mais tarde
```js
let a
a = 0
```

## Tipos de dados
Variáveis em JavaScript não têm nenhum tipo associado. <br />
Uma vez que você atribui um valor com algum tipo a uma variável, você pode posteriormente reatribuir a variável para armazenar um valor de qualquer outro tipo, sem nenhum problema.<br />
```js
let a
a = 0
a = "Texto"
a = 0.5
a = 2*2
a = [1, 2, 3]
```

### Dados primitivos
Além dos dados primitivos abaixo, podemos ter um tipo de dado indefinido, onde o compilador consegue encontrar a melhor solução para resolver este dado.
```js
let a
a = 0 //Número
a = "Texto" //String
a = false //Boolean
a = 😁 //Símbolos
a = null
```
> **💡 DICA**  
String é um tipo especial de dados em qualquer linguagem, com ela podemos fazer várias operações. Pega essa dica e se aprofunde no assunto
```js
const nome = 'Isaac'
console.log(nome.length) //Mostra o tamanho da string

const nome2 = 'Isaac'
console.log('Meu nome é ' + nome2) //Concatena duas strings

const variavel = 'teste'
const string = `alguma coisa ${variavel}` //Concatena duas strings (crase)
console.log(string)
```

### Objetos
Qualquer valor que não seja de um tipo primitivo (uma string, um número, um booleano, null ou undefined) é um objeto. 
Tipos de objetos têm propriedades e também possuem métodos que podem agir sobre essas propriedades.
```js
function Carro(marca, modelo) {
 this.marca = marca
 this.modelo = modelo
}

const meuCarro = new Carro('Ford', 'Fiesta')
console.log(meuCarro.marca)
console.log(meuCarro.modelo)

const meuCarro2 = new Carro('Chevrolet', 'Onix')
console.log(meuCarro2.marca)
console.log(meuCarro2.modelo)
```

## Operadores matemáticos
Operadores permitem que você pegue duas expressões simples e as combine para formar uma expressão mais complexa. <br />
Um operador já apresentado foi apresentado ao falar sobre variáveis: o operador de atribuição `=`. <br />
Vamos ver alguns outros operadores:
```js

```


  - Operadores matemáticos
    - ordem execução
  - Operadores de comparação
  - Condicionais
    - If
    - Else
  - Array
  - Loops
    - While
    - For
    - for of
  - Funções
  - DOM
  - Objetos
    
