/**
 * 1. Cria uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
 * Crie um método que, dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar
 * o percurso
 */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = ((gastoMedioPorKm ** -1).toFixed(3));
    }

    valorGastoCombustivel(distanciaEmKm, precoCombustivel) {
        const valorPercurso = (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel);
        return valorPercurso;
    }
}

const ranger = new Carro('Ford', 'Azul titânio', 12);
console.log(ranger);
const valorViagemRanger = ranger.valorGastoCombustivel(70,5);
console.log(`O valor de combustível que será gasto para essa viagem é R$${valorViagemRanger.toFixed(2)}`);