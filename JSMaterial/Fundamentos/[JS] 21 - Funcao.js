// Atribuindo funções a variáveis
// Desta forma a variável deixa de receber um valor ou um objeto e passa a realizar uma operação

const imprimirSoma = function (a,b=0){
    console.log('Imprimindo a soma de dois valores',a+b);
}

console.log(typeof imprimirSoma) // A variável passa a ser do tipo função
imprimirSoma(2,3);


// Função Arrow
// Tranformando a função anterior em uma função arrow
// Arrow substitui a palavra function
// É uma forma reduzida de escrita


const soma = (a,b = 0) =>{
    console.log('Utilizando Arrow',a+b)
}
soma(1,2);


// Utilizando retorno implicito
const subtracao = (a,b=0) => a-b
subtracao(5,2);