// Tipagem
/* A linguagem Java Script possui uma tipagem fraca/dinamica sendo uma linguagem flexivel.
Exemplo disso é o tipo de dados numérico, já que não existe um tipo especifico de tipagem para cada tipo de numero.
int, bool, float, smallint, bigint, decimal, etc.
Essa caracteristica tira a especificada da linguagem na hora de retornar erro por retornar por vezes respostas vagas dificultando o diganótisco

Além disso a tipagem abrange a falta de flexibilidade da linguagem, sendo linguagens bem definidas e engessadas consideradas de tipagem forte e flexiveis de tipagem fraca
*/

let qualquer = 'Legal';
console.log('O valor da variável qualquer é:',qualquer)
console.log('O tipo da variável qualquer é:',typeof qualquer);

qualquer = 3.1546;
console.log('\nNovo valor da variável qualquer:',qualquer);
console.log('Novo tipo da variável qualquer:', typeof qualquer);
