// Numeros

// 1 - Exemplo de dados
const peso1 = 1.0;
const peso2 = Number('2.1') // Desta forma a string 2.0 será convertido para tipo numérico


// 2 - Verificando o tipo da variável utilizando o metodo Number.isInteger

console.log('A variável peso1 tem o valor de: ',peso1,'\nJá a variável peso2 tem o valor de:',peso2);
// Verifica se a variável peso1 e peso2 são numeros inteiros
console.log('\nCom isso, é verdade que a variável peso1 é do tipo int?',Number.isInteger(peso1),'\ne a variável peso2?',Number.isInteger(peso2));

// 3 - Continuando o exercicio e adicionando operações
const avaliacao1 = 9.765;
const avaliacao2 = 7.463;

const total = avaliacao1*peso1 + avaliacao2*peso2;
const media = total/(peso1+peso2);
// Reduzindo o numero de casas decimais utilizando o metodo '.toFixed' fixa o numero de casas decimais retornadas no resultado
console.log('A nota total foi: ',total,' e a média final foi:',media.toFixed(2));
// Converte o resultado para o formato string utilizando '.toString()'
console.log('\nA nota final em formato de string é:\n',media.toString());
// O .toString consegue converter para valores binários
console.log('\nUsando toString convertendo a media para numero binário gera o resultado de:\n',media.toString(2));

// Number pode ser um tipo - number- ou uma função - Number