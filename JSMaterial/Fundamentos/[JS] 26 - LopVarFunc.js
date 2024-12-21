// Utilizando o scopo de bloco Var x Let
// O var não possui escopo de função
// Neste caso para armazenar valores individuais na variável i é preciso usar let 


const funcs = [] // Array criada e indefinida

for( var i = 0; i<10; i++){ // Loop for criado começando em 0 < 10 e adicionando valores de 1 em 1
    funcs.push(function(){ // Armazena os valores da execução dentro da array
        console.log('Usando for:',i);
    })
}
funcs[1]() // exiba o valor armazenado no indice 1

const  funcs2 = [] // Array indefinida

for(let i = 0; i<10;i++){ // Loop for usando let, que tem a propriedade de guardar os valores do bloco
    funcs2.push(function(){ // Insira cada valor de i dentro da Array
        console.log('Usando let',i)
    })
}

funcs2[4]() // exiba o valor armazenado no indice 4