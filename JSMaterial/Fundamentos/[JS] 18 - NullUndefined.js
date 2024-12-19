// Atribuição por referencia e atribuição por valor
// Atribuição por referencia é a atribuição de valor utilizando outra variável para alterar o valor da variável localizada no endereço
// Atribuição por valor, é quando não é utilizado o conceito de objeto e com isso o valor da variável é alterado
// A utilização de objetos realiza a utilização de endereços de memória, já a atribuição por valor altera de fato o valor da variável



const a = {name: 'Teste'}; // Neste caso a variável a não tem o conteúdo desse objeto, mas sim o endereço


console.log('Retorna',a);

const b = a // Neste caso b recebe o endereço da variável a, ou seja o objeto e consequentemente o endereço tem seu valor alterado
console.log(b);

// Mudando o valor do objeto 'name'
b.name = 'Opa' // Alterando o valor localizado no endereço do objeto name
console.log(b);
console.log(a); // Desta forma o endereço a recebeu a alteração também, sendo assim uma atribuição por referencia


// Null e Undefined
// Quando a variável recebe o resultado null significa que ela não tem nenhum endereço de memória alocando a informação

let valor // Declarodo e não inicializado
valor = null
console.log(valor);
// console.log(valor2); // Neste caso o erro gerado será do tipo undefined por que a variável nem foi declarada

// Definindo um valor padrão a uma variável
const produto = {}
console.log('Retorna', produto.preco) // Retornou indefinido

// Adicionando um valor ao chave produto
produto.preco = 2.45
console.log(produto)

// Por padrão sempre escolha definir objetos como null para evitar erros por questões de valores ou informações erradas