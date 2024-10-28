let tempCelsius = document.getElementById("tempCelsius");
let bttKelvin = document.getElementById("bttKelvin");
let bttFahreinheit = document.getElementById("bttFahrenheit");
let pResultado = document.getElementById("pResultado");
let labelResultado = document.getElementById("labelResultado");
let inputResultado = document.getElementById("inputResultado");

bttKelvin.addEventListener("click", function (e) {
  e.preventDefault();
  let resultado;
  resultado = tempCelsius.value;
  resultado = Number(resultado);
  resultado += 273.15;
  pResultado.innerHTML = "Valor em Kelvin";
  labelResultado.innerHTML = "K";
  inputResultado.value = resultado;
});
bttFahreinheit.addEventListener("click", function (e) {
  e.preventDefault();
  let resultado;
  resultado = tempCelsius.value;
  resultado = Number(resultado);
  resultado = resultado * (9 / 5) + 32;
  pResultado.innerHTML = "Valor em Fahreinheit";
  labelResultado.innerHTML = "F";
  inputResultado.value = resultado;
});
