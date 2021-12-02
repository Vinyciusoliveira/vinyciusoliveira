const alunos =['joao','maria','pedro'];
alunos[0]= 'fernanda';//muda o nome do indice escolhido 0 para outro nome
alunos.push('luiza');//adiciona um novo item ao final do array
alunos.unshift('bruna');//coloca o novo item no indice 0 



console.log(alunos[2]);//mostra o nome guardado no segundo indice
console.log(alunos[0]);//mostra o nome do item modificado
console.log(alunos.length);//mostra a quantidade de indices total guardado na array
console.log(alunos);
console.log(alunos.slice(0,4));//,mostra os itens escolhidos do fatiamento


/*deleta o item escolhido e deixa como undefined
delete alunos[1];
console.log(alunos);
*/

/*remove o item do indice 0
const removido =alunos.shift();
console.log(removido);
console.log(alunos);
*/

/*remove o item do ultimo indice
const removido =alunos.pop();
console.log(removido);
console.log(alunos);
*/
