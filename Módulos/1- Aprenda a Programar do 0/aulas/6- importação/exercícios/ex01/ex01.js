/**
 * Uma sala contem 5 alunos e, para cada aluno, foi sorteado um número de 1 a 100.
 * Faça um programa que receba os 5 números sorteados para os alunose mostre o maior número sorteado.
 *
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 *
 * Saída:
 * 98
 */

const { gets, print } = require("./funcoes-auxiliares.js");

quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

print(`O maior valor da lista é: ${maiorValorEncontrado}`);
