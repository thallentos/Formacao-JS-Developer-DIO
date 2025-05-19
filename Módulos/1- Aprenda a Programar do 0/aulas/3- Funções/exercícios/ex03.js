function aplicar_desconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));  
};

function aplicar_juros(valor, juros) {
    return (valor + (valor * (juros / 100)));  
};

//Main
(function pagar(preco=10, forma_de_pagamento=1) {
    console.log(`Preço do produto: ${preco.toFixed(2)}`);
    console.log(`Forma de pagamento escolhida: `);

    if (forma_de_pagamento === 1) {
        console.log('Débito');
        const valor_final = aplicar_desconto(preco, 10);
        console.log(`Valor final: ${valor_final.toFixed(2)}`);
    } else if (forma_de_pagamento == 2) {
        console.log('Dinheiro ou Pix');
        const valor_final = aplicar_desconto(preco, 15);
        console.log(`Valor final: ${valor_final.toFixed(2)}`);
    } else if (forma_de_pagamento == 3) {
        console.log('Parcelamento em 2x');
        const valor_final = console.log(preco);
        console.log(`Valor final: ${valor_final.toFixed(2)}`);
    } else if (forma_de_pagamento == 4) {
        console.log('Parcelamento em mais de 2x');
        const valor_final = aplicar_juros(preco, 10);
        console.log(`Valor final: ${valor_final.toFixed(2)}`);
    } else {
        console.log('Forma de pagamento inválida!!');
    };

    
})();