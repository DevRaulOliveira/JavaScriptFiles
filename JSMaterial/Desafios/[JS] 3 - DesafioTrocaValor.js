/*
 Desafio 3 - Troca de valores

 Basicamente é preciso trocar os valores entre as variáveis, fazendo com que A tenha o valor de B e B o valor de A

 a = 7
 b = 94

*/

let a = 7;
let  b = 94;
let temp = a; // Salva o antigo valor de a dentro da variável nova assim o valor antigo de a permanece guardado.

console.log('A vale', a,'e B vale', b);

a =b; 
b = temp; // Resgata o antig valor de a que está armazenado na variável temporária

console.log('O novo valor de A é', a,'e o novo valor de B é',b);

// Além disso é possível realizar a troca através da troca de posição entre valores utilizando [], ficando da forma a seguir.

[a,b] = [b,a];
console.log('O novo valor de a é:', a,'e o novo valor de b é:',b);

