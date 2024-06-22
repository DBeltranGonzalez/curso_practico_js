// LECTURA DESDE JS DEL HTML
// Crear variables que representen a los selectores de los objetos HTML
const  h1 = document.querySelector('h1'); // Selector por nombre de etiqueta
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pId = document.getElementById('p_id');
const input = document.querySelector('input');
console.log(input.value)
console.log (
    h1,
    p,
    parrafito,
    pId,
    input
)

// Escribiendo HTML desde JS
h1.innerHTML = 'NO ME GUSTA EL TITULO ORIGINAL' // Modificar el HTML desde JS
console.log(h1.getAttribute('class')) // Obtener el atributo
h1.setAttribute('class', 'rojo') // Cambiar el atributo clase
h1.classList.add('azul') // Añadir clase
h1.classList.remove('verde') // Eliminar clase
input.value = '456' // Modificar el valor por defecto de un input

// Creando elemento desde JS
const img = document.createElement('img'); //Creación de la imagen
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg') // Colocando los atributos a la imagen
pId.appendChild(img); // Insertando la imagen en el párrafo ID creado anteriormente sin quitar el contenido que estaba antes en el párrafo