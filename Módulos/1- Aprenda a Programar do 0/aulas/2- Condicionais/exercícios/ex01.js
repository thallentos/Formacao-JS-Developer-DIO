/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a
sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 3, reprovação;
- Média entre 3 e 6.95, recuperação;
- Média acima de 6.95, passou de semestre;
*/

const nota1 = 3;
const nota2 = 3;
const nota3 = 3;
const media = (nota1 + nota2 + nota3) / 3;

console.log(`Sua média é ${media}`);

if (media < 3) {
  console.log(`Reprovado!`);
} else if (media >= 3 && media < 6.95) {
  console.log(`Recuperação`);
} else {
  console.log(`Você passou!`);
}
