const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#input_calculo1');
const input2 = document.querySelector('#input_calculo2');
const botonCalcular = document.querySelector('#boton_calcular');
const pResultado = document.querySelector('#resultado')

form.addEventListener('submit', botonOnClick); // No se ponen los paréntesis porque con el addEventListener ya se ordena la ejecución de dicha función

function botonOnClick(event) {
    event.preventDefault();
    resultado = (input1.value + input2.value);
    pResultado.innerText = 'Resultado: ' + resultado;
}