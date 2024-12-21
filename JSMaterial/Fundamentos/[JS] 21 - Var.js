// Utilizando a variável Var
// No JS a localização da variável não afeta a sua visibilidade
// Lembrando que essa regra não se aplica caso a variável esteja dentro de uma função
// Variáveis fora de função são globais

// Criando a variável dentro do bloco
{
    {
        var word = 'Será?'
    }
}

console.log(word)


function teste() {
    var local = 123
    console.log(local)
}
teste()
