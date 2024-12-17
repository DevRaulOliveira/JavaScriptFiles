// Objetos em Java Script
// Objetos em Java Script possuem a simbologia vinculada a  {}
// É uma coleção de chave e valor
// Objetos podem ter sub produtos
// Objetos são conjuntos de chave e valor
// O nome das combinações chave valores são exclusivos, podendo ser repetidos em sub objetos


// Exemplo
const prod1 = {} // Desta forma o objeto está criado
prod1.nome = 'Celular';
prod1.preco = 199.90;

console.log(prod1); // Desta forma a impressão desse objeto trás todas essas informações de uma unica vez por estarem vinculadas a esse objeto

// Criando sub-objetos
// Pode ser escrito dessa forma
const prod2 = {}
prod2.empresa = 'Nome da empresa';
prod2.gerente = 'Nome do gerente';
prod2.equipe = 'Nome da equipe';

// Também pode ser escrito dessa forma

const prod3 = {
    empresa: 'Nome da empresa',
    gerente: 'Nome do gerente',
    secretaria: 'Nome da secretaria',
    equipe: {
        gerente: 'Nome do gerente',
        secretaria: 'Nome da secretaria',
        funcionario: 'Nome do funcionario'
    }
}