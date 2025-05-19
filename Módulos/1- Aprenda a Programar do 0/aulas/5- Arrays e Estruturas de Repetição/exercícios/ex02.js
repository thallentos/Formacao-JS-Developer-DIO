/**
 * 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
*/

class ListaPares {
    valores;

    constructor(valores) {
        this.valores = valores;
    }

    verificaImprimePares() {
        if (this.valores == undefined) {
            console.log(`Você não colocou nenhum valor na lista`);
        } else {
            let arrayPares = [];
            for (let i = 0; i < this.valores.length; i++) {
                if (this.valores[i] % 2 == 0) {
                    arrayPares.push(this.valores[i])
                }
            }
            return arrayPares;
            
        }
    }
}

const cincoNumeros = new ListaPares([1, 2, 3, 4, 5]);
console.log(cincoNumeros);

const cincoPares = cincoNumeros.verificaImprimePares();
console.log(`Esse é a lista atualizada somente com valores pares: [${cincoPares}]`);
