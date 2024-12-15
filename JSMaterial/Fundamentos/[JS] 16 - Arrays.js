// Arrays
/* Arrays são vetores, estrutura unidirecionais, agrupando varias variáveis uma unica estrutura linear
 O acesso é feito utilizando indices.
 Não possui tipagem definida
*/ 

// Variáveis
const valores = [7.7,8.8,9.9,10.1] // Estrutura de arrays
console.log(`Acessando os indices do array ${valores[0]},${valores[1]},${valores[2]},${valores[3]}`) //Acessando aos itens dos indices

// Pop
console.log(valores)
console.log(valores.pop())

// Push
valores.push({id: 4},'teste') // Adicionando item ao indice 4 da Array
console.log(valores)

// Delete
delete valores [1] // Deletando o item do indice 1
console.log(valores) // Nova versão do Array

console.log('\nImprimindo o tipo de "valores" ',typeof valores)