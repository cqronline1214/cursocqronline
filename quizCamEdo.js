

const respuestasCorrectas = [1, 1, 1, 2, 0, 2, 2, 2, 1, 1];

document.getElementById("cuestionario").addEventListener("submit", function(e) {
  e.preventDefault();
  calcularRespuestas();
});

function calcularRespuestas() {
  let correctas = 0;
  for (let i = 0; i < respuestasCorrectas.length; i++) {
    const opciones = document.querySelectorAll(`input[name="p${i}"]`);
    let seleccionada = null;
    for (let j = 0; j < opciones.length; j++) {
      if (opciones[j].checked) {
        seleccionada = j;
        break;
      }
    }
    if (seleccionada === respuestasCorrectas[i]) {
      correctas++;
      opciones[seleccionada].parentNode.classList.add("correcta");
    } else {
      opciones[seleccionada].parentNode.classList.add("incorrecta");
      opciones[respuestasCorrectas[i]].parentNode.classList.add("correcta");
    }
  }
  document.getElementById("resultado").textContent = `${correctas} / ${respuestasCorrectas.length}`;
}