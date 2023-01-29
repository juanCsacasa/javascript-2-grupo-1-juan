//1. Escriba una function que escriba un número a la inversa
function alverris(numero) {
  let alverrisnuevo = "";
  for (let i = numero.length - 1; i >= 0; i--) {
    alverrisnuevo += numero[i];
  }
  return alverrisnuevo;
}
//pense en hacer algo como este decirle a la compu que si era diferente de string lo imprimiera y sino era diferente de string pusiera que siguiera intentando pero no ssupe como realizarlo del todo una disculpa.
/*if (alverrisnuevo !== string) {
  console.log(alverris('hola'));
  }else{
    console.log(alverris('hola') + "siga echandole ganas")
  }*/

//2. Escriba una function que acepte un string como parámetro y convierta cada primer letra de cada palabra en mayúscula

function mayuculas(textos) {
  const letras = textos.split(" ");
  for (let i = 0; i < letras.length; i++) {
    letras[i] = letras[i][0].toUpperCase() + letras[i].substr(1);
  }
  return letras.join(" ");
}

function main(params) {
  console.log(alverris("1234"));
  console.log(mayuculas("hola me llamo juan"));
}
main();
