const entradas = [5, 10, 50, 98, 23];

let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

// Isso serve para exportar as funções
module.exports = { gets, print };
