// Strings
/* Comandos para serem utilizados junto com strings

*/
// Exemplo de variável
const escola = 'Cod3r'
// 1  - Utilizando o metodo charAt é possível extrair a informação de acordo com o indice
console.log(escola.charAt(3)) // Indice 3 tem o caractere '3'

// 2 - Utilizando o metodo charCodeAt, retorna o valor do caractere no indice de acordo com a tabela ASCII
console.log(escola.charCodeAt(3)) // Na tabela ASCII o 3 tem valor 51

// 3 - Utilizando indexOf para encontrar o indice de um determinado caractere.
console.log(escola.indexOf('C')) // Case sensitive
                                // Retornar o indice da primeira ocorrencia do caractere

// 4 - Utilizando substring
console.log(escola.substring(1)) // Retorna o restante da string a partir do indice **MUITO IMPORTANTE
console.log(escola.substring(0,3)) // Retorna esse intervalor de string sem incluir o ultimo

// 5 - Metodo concat, utilizado para unir strings
console.log('Qual o nome da sua escola '.concat(escola).concat("?"))

// 6 - Utilizando Replace para substituir strings.
console.log(escola.replace(3,4)) // Nest caso fez a troca do valor no indice 3 pelo valor numérico 4
// Outro exeplo
console.log(escola.replace('3','e')) // Neste caso buscou a string '3' e trocou pela variável 'e'
console.log(escola.replace(/\d/,'e')) // Neste caso troca todos os DIGITOS do string por 'e'
console.log(escola.replace(/\w/,'a')) // Troque ta primeira letra por 'a'
console.log(escola.replace(/\w/g,'a')) // Troque todas as letras da string por 'a'
console.log(escola.split(',')) // Desta forma é gerada uma array