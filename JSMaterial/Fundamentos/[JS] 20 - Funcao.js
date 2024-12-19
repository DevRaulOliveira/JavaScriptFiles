// Função sem retorno
// function é a palavra reservada para a criação de funções

function imprimirSoma(a,b) {
    console.log(a+b)
}
imprimirSoma(2,3) // Realizando a soma e impressão do resultado por que dentro da função já tem um print


// Criando a segunda função definindo valores padrão para caso não corra a inserção do valor em uma variável
function soma(a,b=0){
    return(a+b); // Desta forma a operação é realizada mas não obrigatóriamente é imprimida
};

console.log(soma(1)) // Por isso é preciso incluir a função dentro do console.log para a exibição no terminal