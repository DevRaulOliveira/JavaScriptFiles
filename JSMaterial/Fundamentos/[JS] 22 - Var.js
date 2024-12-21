// Variável var
// O Var é sobreescrevível

var  numero = 1;
{
    var numero = 2;
    console.log('Dentro:', numero);
}
console.log('Fora:',numero); // Com isso o valor da variável foi sobre escrito