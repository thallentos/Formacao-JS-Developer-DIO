/**
 * 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual a condicão de pagamento escolhida e efetuar o calculo
 * adequado.
 *
 * Codigo Condição de pagamento
 * - À vista Débito, recebe 10% de desconto
 * - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 * - Em duas vezes, preco normal de etiqueta sem juros;
 * - Acima de duas vezes, preco normal de etiqueta mais juros de 10%;
 */

const preco = 10;
const forma_de_pagamento = 4;
let valor_final = 0;

console.log(`Preço do produto: ${preco.toFixed(2)}`);


if (forma_de_pagamento === 1) {
    console.log('Débito');
    const debito = preco - (preco * (10/100));
    valor_final = debito;   
} else if (forma_de_pagamento === 2) {
    console.log('Dinheiro ou pix');
    const dinheiro_pix = preco - (preco * (15/100));
    valor_final = dinheiro_pix;
} else if (forma_de_pagamento === 3) {
    console.log('Parcelado em 2x');
    const duas_vezes = preco;
    valor_final = duas_vezes;
} else if (forma_de_pagamento === 4) {
    console.log('Parcelado em mais de 2x');
    const mais_de_duas_vezes = preco + (preco * (10/100));
    valor_final = mais_de_duas_vezes;
} else {
    console.log('Forma de pagamento inválida');
}

console.log(`Valor final: ${valor_final.toFixed(2)}`);