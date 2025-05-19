/**
 * 2. Crie uma classe para representar pessoas
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura**2));
 * Instancie uma pessoa chamada José que tenha 70kg de peso, 1.75m de altura e peça a José para dizer o valor do
 * seu IMC. Para finalizar, crie um método para classificar o imc da pessoa.
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC () {
        const imc = this.peso / (this.altura**2);
        return imc;
    }

    classificarIMC() {
        const imc = this.calculoIMC();
        if (imc < 18.5) {
            return (`${this.nome} está abaixo do peso`);
          } else if (imc >= 18.5 && imc < 25) {
            return (`${this.nome} está com o peso normal`);
          } else if (imc >= 25 && imc < 30) {
            return (`${this.nome} está acima do peso`);
          } else if (imc >= 30 && imc < 40) {
            return (`${this.nome} está obeso`);
          } else {
            return (`${this.nome} está com obesidade grave`);
          }
    }
}

const josé = new Pessoa('José', 70, 1.75);
console.log(josé);
const valorImcJosé = josé.calculoIMC();
console.log(`O imc de ${josé.nome} é ${valorImcJosé.toFixed(2)}`);
const classificacaoImcJose = josé.classificarIMC();
console.log(`Classificação do IMC de ${josé.nome}: ${classificacaoImcJose}`);


