// Definição de nomes de variáveis, arquivos e pastas são fundamentais
/*
modelos de variáveis
De modo geral variaveis podem criadas seguindo as seguintes estruturas:
idade = 20;
var idade = 20;
let idade = 20;

JAVA SCRIPT NÃO DIFERENCIA NUMEROS INTEIROS DE NUMEROS FLUTUANTES
*/

// 1 - Criando variável

let preco = 19.9;
let desconto = 0.4;

// 2 - Imprimindo o resultado no console
console.log('Realizando o calculo direto usando os valores numéricos',19.9 *0.6);
console.log('Realizando a operação matematica dentro do -print-',preco * (1-desconto)); // É importante a adição do parentes interno para atingir o objetivo desejado

// 3 - Retornando o calculo para dentro de uma variável e realizando a impressão
let resultadoFim = (preco * (1-desconto));

// 4 - Imprimindo o resultado fim
console.log('O resultado sendo atribuido a uma variável',resultadoFim);

// 5 - Concatenando informações
console.log ('O preço do produto é ',preco,' após aplicar 40% de desconto temos',resultadoFim);

// 6 - Verificando o tipo de dado utilizando typeof
console.log(typeof resultadoFim);
console.log(typeof true);

// 7 - Variavel CONSTANTE que não é alterada ao longo do código, com isso o valor é mantido ao longo do código
const idade = 20; // Com isso o valor da variável idade será fixado em 20