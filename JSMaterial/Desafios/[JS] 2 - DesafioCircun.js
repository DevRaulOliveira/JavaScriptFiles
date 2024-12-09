/*
Desafio da circunferencia
*/

const PI = 3.141592;
let raio = 3;

let resultado = PI *raio^2;

console.log('O resultado da área é', resultado,'m²');

// 2 - Utilizando a biblioteca math é possível invocar o diretamente o valor de PI

console.log('Utilizando a biblioteca Math temos como resultado ',Math.PI*raio^2,'m²');

// Além disso é possível incorporar o valor de PI fora de console.log, ficando da seguinte forma:

resultCircun = Math.PI *raio^2
console.log('O resultado da área da circunferencia é:',resultCircun,'m²');
