/**
 * Faça um programa para calcular o valor de uma viagem
 * 
 * Você terá 3 variáveis, sendo elas:
 * 1- Preço do Combustível;
 * 2- Gasto médio de combustível do carro por KM;
 * 3- Diatância em KM da viagem;
 */

const preco_combustivel = 5.79;
const gasto_medio_combustivel = 12;
const distancia_km_viagem = 1580;

const litros_consumidos = (distancia_km_viagem/gasto_medio_combustivel);
const valor_viagem = litros_consumidos * preco_combustivel;

console.log(valor_viagem.toFixed(2));
