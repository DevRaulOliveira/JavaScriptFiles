// Tipo booleano
// Retorna TRUE ou FALSE. Retorna também 1 e 0

// Variáveis

let isAtivo = false;
console.log('Imprimindo a variavel isAtivo temos:\n',isAtivo);

// Mudando o valor da variável para true
isAtivo = true;
console.log('\nApós a mudança do valor da variável:\n',isAtivo)


// Metodo boolean
isAtivo = 1
console.log('\nUtilizando o metodo Boolean temos que 1 é:\n',Boolean(isAtivo));

// Utilizando negações usando exclamação [!]
console.log('\nA variável não é verdadeira:\n',!isAtivo,'\nNão, a variável é verdadeira, por ter valor 1.') // Retorna um teste lógico de verdadeiro ou falso

// Por via de regra todos os numeros inteiros são verdadeiros menos o 0

// Realizando uma operação lógica encima de um String
let nome = 'Pedro';
console.log('Realizando teste lógico usando variáve: ',nome || 'Desconhecido');

nome = '' // Retirando o valor de dentro da variável nome
console.log(`\nTeste logico retorando falso, ou seja segunda opção: ${nome || 'Desconhecido'}`) // Teste lógico falso, retornando a segunda opção