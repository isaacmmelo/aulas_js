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
Vamos ver alguns outros operadores: <br />

Adição `+`
```js
/** Operador de adição + */
const tres = 1 + 2
const resultado = tres + 1
console.log(resultado)

/** Ele também serve para concatenar strings */
const nome = "Isaac"
const sobrenome = "Mendes"
const nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)
```
Subtração `-`
```js
/** Operador de subtração - */
const tres = 4 - 1
const resultado = tres - 1
console.log(resultado)
```
Divisão `/`
```js
/** Operador de divisão / */
const result = 20 / 5 
console.log(result)
const result2 = 20 / 7
console.log(result2)
/** Se você dividir por 0, terá um valor infinito, o JS não retorna 0 */
const result3 = 1/0
console.log(result3)
```
Multiplicação `*`
```js
/** Retorna a multiplicaçãod de dois números */
const result = 2 * 5 
console.log(result)
const result2 = 2 * -5
console.log(result2)
```
Resto `%`
```js
/** Retorna o resto da divisão, muito útil para verificar divisores */
const result = 20%5
console.log(result)
const result2 = 21%5
console.log(result2)
```
Exponeciação `**`
```js
/** Eleva o primeiro número ao segundo */
console.log(1 ** 2)
console.log(2 ** 1)
console.log(2 ** 2)
console.log(2 ** 8)
console.log(8 ** 2)
```

## Ordem de execução da expressões
|Ordem|Operador|Descrição|
|:---:|:---:|:---:|
| 1 |`*``/``%`|Multiplicação, divisão e resto|
| 2 |`+``-`|Adição e subtração|
| 3 |`=`|Atribuição|

```js
/*
Operações no mesmo nível (como + e -) são executadas na ordem em que são encontradas, da esquerda para a direita.
*/
let a = 1 * 2 + ((5 / 2) % 2)
let a = 2 + ((5 / 2) % 2)
let a = 2 + (2.5 % 2)
let a = 2 + 0.5
let a = 2.5
console.log(a)
```

## Operadores de comparação
Você pode usar os operadores para comparar dois números ou duas strings. <br /> 
Os operadores de comparação sempre retornam um booleano, um valor que é *verdadeiro* ou *falso*.<br />
Estes são os operadores de comparação de desigualdade:

- `<` significa "menor que"
- `<=` significa "menor que ou igual a"
- `>` significa "maior que"
- `>=` significa "maior que ou igual a"

```js
/** Vejamos as comparações abaixo */
let a = 2
console.log(a <  1 )
console.log(a <= 2 )
console.log(a >  2 )
console.log(a >= 2 )
```

Além desses, temos 2 operadores de igualdade. Eles aceitam dois valores e retornam um booleano:

`===` verifica a igualdade
`!==` verifica a desigualdade

```js
/** Vejamos as comparações abaixo */
let a = 2
console.log(a === 2)
console.log(a !== 2)
```
## Condicionais
Estruturas condicionais são opções para fazer com que o programa siga um caminho ou outro, depende do resultado do teste.

### If
A estrutura condicional *if* (se), é a mais simples.

```js
/** A estrutura abaixo sempre é executada, pois é o resultado é verdadeiro */
if (true) {
  //faça alguma coisa
  console.log('Verdadeiro')
}
/** A estrutura abaixo nunca é executada, pois é o resultado é falso*/
if (false) {
  //faça alguma coisa
  console.log('Falso')
}
```

O *if* verifica a expressão que você passa para um valor verdadeiro ou falso.<br />
Se você passar um número, isso sempre será avaliado como verdadeiro, a menos que seja 0.

```js
if (1) console.log('Um')
if (0) console.log('Zero')
```

<br />Se você passar uma string, ela sempre será avaliada como verdadeira, a menos que seja uma string vazia.

```js
let a = "teste"
let b
if (a) console.log('A')
if (b) console.log('B')
```
> **💡 DICA**  
Você percebeu as chaves `{}`? Isso é chamado de bloco e é usado para agrupar uma lista de declarações diferentes. Um bloco pode ser colocado onde você pode ter uma única declaração. E se você tiver apenas uma declaração para executar após as condicionais, você pode omitir o bloco e escrever apenas a declaração, como fizemos nos exemplos anteriores, mas atenção, a recomendação é sempre utilizar os `{}`


### Else
Você pode fornecer uma segunda parte para a declaração `if`: `else`. Você anexa uma declaração que será executada se a condição do `if` for *falsa*.

```js
if (true) {
  // faça algo
  console.log('Verdadeiro')
} else {
  // faça algo diferente
  console.log('Falso')
}
```

Como o `else` aceita uma declaração, você pode aninhar outra declaração `if`/`else` dentro dele:

```js
if (a === true) {
  // faça algo
  console.log('Verdadeiro')
} else if (b === true) {
  // faça algo diferente
  console.log('Verdadeiro 2')
} else {
  //fallback
  console.log('Falso')
}
```

## Array
Um `array` é uma coleção de elementos. Em JavaScript, os arrays *não são um tipo próprio*, eles são *objetos*.<br /> 
Podemos inicializar um `array` vazio de duas maneiras diferentes:
```js
const a = []
const a = Array()
/** A primeira utiliza a sintaxe literal de array, enquanto a segunda usa a função embutida Array().*/
```
É possível pré-preencher o `array` utilizando esta sintaxe:

```js
const a = [1, 2, 3]
const b = Array.of(1, 2, 3)
```
Um `array` pode conter qualquer valor, até mesmo valores de tipos diferentes:
```js
const a = [1, 'Flavio', ['a', 'b']]
```
Dado que podemos adicionar um `array` a outro, podemos criar arrays multidimensionais, com aplicações úteis, como uma matriz:
```js
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(matriz[0][0])
console.log(matriz[2][0])
```
Os elementos do array são acessados referenciando seu índice, que começa do zero:
```js
const a = [1, 2, 3]
console.log(a[0])
console.log(a[1])
console.log(a[2])
```
É possível inicializar um novo `array` com um conjunto de valores usando esta sintaxe, que primeiro inicializa um `array` de 12 elementos e preenche cada elemento com o número 0:
```js
Array(12).fill(0)
```
A quantidade de elementos no `array` pode ser obtida verificando sua propriedade length:
```js
const a = [1, 2, 3]
console.log(a.length)
```
É possível definir o comprimento do `array`.<br />
Se atribuir um número maior do que a capacidade atual do `array`, nada acontece.<br />
Se atribuir um número menor, o `array` é cortado nessa posição:
```js
const a = [1, 2, 3]
a.length = 2
console.log(a)
```
## Estruturas de repetição
Laços de repetição são uma das principais estruturas de controle do JavaScript. Com um laço, podemos automatizar e repetir indefinidamente um bloco de código, quantas vezes desejarmos. 

### While
O `while` é a estrutura de repetição mais simples que o JavaScript nos fornece.<br /> Adicionamos uma condição após a palavra-chave `while` e fornecemos um bloco que é *executado até que* a condição seja avaliada como *verdadeira*.

```js
const lista = ['a', 'b', 'c'];
let i = 0;

while (i < lista.length) {
  console.log(lista[i]); //Valor da lista
  console.log(i); //Índice de repetição do While
  i = i + 1;
}
```
Você pode interromper um `while` usando a palavra-chave `break`, assim:

```js
const algoEVerdadeiro = true
while (true) {
  if (algoEVerdadeiro) break;
}
```
Se decidir que no meio de um loop deseja pular a iteração atual, você pode passar para a próxima iteração usando `continue`:

```js
const lista = ['a', 'b', 'c'];
let i = 0;

while (i < lista.length) {
  i = i + 1;
  if (lista[i] === 'a') continue;
  console.log(lista[i]); //Valor da lista
  console.log(i); //Índice de repetição do While
}
```
Muito semelhante ao while, temos a estrutura `do...while`. <br />
Basicamente, é o mesmo que while, exceto que a condição é avaliada após a execução do bloco de código.<br />
Isso significa que o bloco é sempre executado pelo menos uma vez.

```js
const lista = ['a', 'b', 'c'];
let i = 0;

do {
  console.log(lista[i]); //Valor da lista
  console.log(i); //Índice de repetição do While
  i = i + 1;
} while (i < lista.length);
```
### For
A segunda estrutura de repetição mais importante no JavaScript é o `for`.<br /> 
Usamos a palavra-chave `for` e passamos um conjunto de 3 instruções: a inicialização, a condição e a parte de incremento.
```js
const lista = ['a', 'b', 'c'];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]); //Valor da lista
  console.log(i); //Índice de repetição do For
}
```
> **💡 DICA** 
Assim como no `while`, você pode interromper um `for` usando `break` e pode avançar rapidamente para a próxima iteração usando `continue`.

### For of
Este loop é relativamente recente (introduzido em 2015) e é uma versão simplificada do for:

```js
const lista = ['a', 'b', 'c'];
for (const valor of lista) {
 console.log(valor); //Valor da lista
}
```