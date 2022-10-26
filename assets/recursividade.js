const clientes = ["Jorge", "Maria", "Manoel", "João", "Roberto", "Vera"];
let tempoEspera = 15;

function calcularTempoSaida(array, nome) {
  //   debugger;
  let index = array.length - 1;
  let clienteAtual = array[index];
  if (clienteAtual == nome) {
    console.log(tempoEspera);
  } else if (index == 0) {
    console.log(null);
  } else {
    tempoEspera += 15;
    array.pop();
    // console.log(array);
    calcularTempoSaida(array, nome);
  }
}
calcularTempoSaida(clientes, "Elis");
