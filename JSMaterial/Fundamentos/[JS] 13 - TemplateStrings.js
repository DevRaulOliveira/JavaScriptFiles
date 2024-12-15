// Template String
// É um metodo
// Estrutura básica da interpolação  `  junto com comando dentro de ${}


// Exemplo
const nome  = 'Rebeca';

// 1 - Metodo simples de conexão de strings
const concatenação = 'Olá' + nome + '!';

console.log('Utilizando concatenação:\n',concatenação)

// 2 - Utilizando template de string, realizando interpolação
const template = `
    Olá
        ${nome}!`

console.log('\nUtilizando template string:\n',template) // Desta forma é repoduzido o mesmo estilo do código

// Expressões....
console.log(`\nRealizando a interpolação novamente:\n1 + 1 = ${1 + 1}`)

// Função Arrow
const up  = texto => texto.toUpperCase() // up está sendo uma função ARROW que converte o texto para Maiuscula

console.log(`\nUtilizando a função Arrow, convertendo a string para maiuscula temos:\nEi... ${up('cuidado')}`)