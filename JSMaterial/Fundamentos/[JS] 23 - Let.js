// Variável Let
// O Let respeita os blocos e escopos
// Let foi criado na linguagem para ter essa propriedade diferente, já que alterar o funcionamento da variável var iria quebrar a linguagem JS

let numero = 1;
{
    let numero = 2;
    console.log('Dentro:', numero);
}
console.log('Fora:',numero); // Com isso o valor da variável não é substituido