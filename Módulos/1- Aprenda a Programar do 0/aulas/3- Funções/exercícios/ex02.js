function verifica_Idade(idade) {
    if (idade < 18 && idade >= 0) {
        return 'Você é menor de idade';
    } else if (idade > 18) {
        return 'Você é maior de idade';
    } else {
        return 'Idade inválida';
        //idade menor que zero
    }
};

const idade = 19;
console.log(verifica_Idade(idade));