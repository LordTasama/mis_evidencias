// Proyecto: Cambiar color de fondo según los valores RGB dados por el usuario.

// Se toman los tres input que contendrán los valores RGB (RED,GREEN,BLUE), así mismo los (</p>)..
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Se inicializan las variables (rojo,verde y azul que serán los valores RGB)
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Se definen los textos (</p>) con los valores de los input.
textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

// Se crea una función para cambiar el color del body según las variables anteriormente inicializadas (rojo,verde y azul).
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Se crea el evento "change", cada vez que el valor del input cambie, este se disparará.

// Para actualizar Red (Rojo).
inputRojo.addEventListener("change", (e) => {
  // Se toma el método (target) que da toda la información de la etiqueta, pero en este caso solo necesitamos su valor (.value)
  rojo = e.target.value;

  // Actualizamos el texto (</p>) utilizando el método "textContent", "innerHTML" o "innerText" con el valor de "rojo"
  textoRojo.textContent = rojo;

  // Llamamos la función para actualizar el color del body
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul)..
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
