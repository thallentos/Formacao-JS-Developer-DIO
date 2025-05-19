//1) Crie um programa que, dado seu número, imprima a sua tabuada

class Tabuada {
    valor;
    numeroTabuada;

    constructor(valor, numeroTabuada) {
        this.valor = valor;
        this.numeroTabuada = numeroTabuada;
    }

    calculoTabuada() {
        if (this.numeroTabuada == undefined){
            console.log('Você não colocou o valor da tabuada');
            
        } else {
            console.log(`Tabuada do ${this.valor}:`);
            
            for (let i = 1; i <= this.numeroTabuada; i++) {
                console.log(`${this.valor} x ${i} = ${this.valor * i}`);
            }
        }
    }
}

const cinco = new Tabuada(5, 10);
console.log(cinco);

const cincoTabuada = cinco.calculoTabuada();