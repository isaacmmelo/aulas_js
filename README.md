# Uma introdução a JavaScript
Para as aulas de TADW do Instituto Federal Goiano

> **💡 DICA**  
Você pode utilizar o site [PlayCode JS](https://playcode.io/javascript) para rodar os códigos abaixo

## Especificidades do Java Script
### Espaços em branco e quebra de linha
O JavaScript não considera espaços em brancos nem quebras de linha como parte do código útil, portanto pode-se utilizar a vontade de espaçamento e deixar o código do jeito que fique mais fácil para você entender
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




#Especifidades do JS
  

  - Identificador
  - Comentário
  - Ponto e vírgula opcional
  - Variável
    - const
    - let
  - Tipo
  - Expressões
  - Operadores matemáticos
    - ordem execução
  - Operadores de comparação
  - Condicionais
    - If
    - Else
  - Array
  - Strings
  - Loops
    - While
    - For
    - for of
  - Funções
  - DOM
  - Objetos
    
