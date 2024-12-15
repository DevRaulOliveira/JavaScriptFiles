// Strings
/* Comandos para serem utilizados junto com strings

*/
// Exemplo de variável
const escola = 'Cod3r'
// 1  - Utilizando o metodo charAt é possível extrair a informação de acordo com o indice
console.log('Apontando qual caractere está localizado no indice 3:',escola.charAt(3)) // Indice 3 tem o caractere '3'

// 2 - Utilizando o metodo charCodeAt, retorna o valor do caractere no indice de acordo com a tabela ASCII
console.log('Apontando o valor na tabela ASCII do caractere localizado no indice 3:',escola.charCodeAt(3)) // Na tabela ASCII o 3 tem valor 51

// 3 - Utilizando indexOf para encontrar o indice de um determinado caractere.
console.log('Retornando o indice em que está localizado o caractere C:',escola.indexOf('C')) // Case sensitive
                                // Retornar o indice da primeira ocorrencia do caractere

// 4 - Utilizando substring
console.log('Imprimindo o restante da string a partir do indice 1:',escola.substring(1)) // Retorna o restante da string a partir do indice **MUITO IMPORTANTE
console.log('Imprimindo a palavra a partir do indice 0 até o indice 3:',escola.substring(0,3)) // Retorna esse intervalor de string sem incluir o ultimo

// 5 - Metodo concat, utilizado para unir strings
console.log('Qual o nome da sua escola '.concat(escola).concat("?"))

// 6 - Utilizando Replace para substituir strings.
console.log('Substitindo o caractere localizado no indice 3 por 4:',escola.replace(3,4)) // Nest caso fez a troca do valor no indice 3 pelo valor numérico 4
// Outro exeplo
console.log('Trocando o caractere 3 por e:',escola.replace('3','e')) // Neste caso buscou a string '3' e trocou pela variável 'e'
console.log('Trocando o primeiro caracter numérico na string por e: ',escola.replace(/\d/,'e')) // Neste caso troca todos os DIGITOS do string por 'e'
console.log('Trocando o primeiro caractere por a: ',escola.replace(/\w/,'a')) // Troque ta primeira letra por 'a'
console.log('Trocando todos os caracteres por a: ',escola.replace(/\w/g,'a')) // Troque todas as letras da string por 'a'
console.log('Gerando uma array apartir da string: ',escola.split(',')) // Desta forma é gerada uma array