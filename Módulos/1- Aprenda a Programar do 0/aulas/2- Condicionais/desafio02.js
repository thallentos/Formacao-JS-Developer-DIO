/**
 * Faça um programa para calcular o valor de uma viagem
 * 
 * Você terá 5 variáveis, sendo elas:
 * 1- Preço do etanol;
 * 2- Preço da gasolina;
 * 3- O tipo de combustível que está no seu carro;
 * 4- gasto médio do combustível do carro por KM;
 * 5- Diatância em KM da viagem;
 */

const preco_etanol = 5.79;
const preco_gasolina = 6.66;
const tipo_combustivel = 'Etanol';
const gasto_medio_combustivel = 12;
const distancia_km_viagem = 1580;

const litros_consumidos = (distancia_km_viagem/gasto_medio_combustivel);

if (tipo_combustivel === 'Etanol') {
    let preco_combustivel = preco_etanol;
    const valor_viagem = litros_consumidos * preco_combustivel;
    console.log(valor_viagem.toFixed(2));
} else if (tipo_combustivel === 'Gasolina') {
    let preco_combustivel = preco_gasolina;
    const valor_viagem = litros_consumidos * preco_combustivel;
    console.log(valor_viagem.toFixed(2));
} else {
    console.log('Tá errado');
}
