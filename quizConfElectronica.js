const respuestasCorrectas = [2, 3, 2, 3, 1, 3, 1, 3, 2, 1];

document.getElementById("cuestionario").addEventListener("submit", function (e) {
  e.preventDefault();

  let correctas = 0;

  respuestasCorrectas.forEach((correcta, i) => {
    const opciones = document.getElementsByName("p" + i);
    let seleccionada = -1;

    opciones.forEach((r, index) => {
      r.parentNode.classList.remove("correcta", "incorrecta");
      if (r.checked) seleccionada = parseInt(r.value);
    });

    if (seleccionada === correcta - 1) {
      opciones[correcta - 1].parentNode.classList.add("correcta");
      correctas++;
    } else {
      if (seleccionada >= 0) {
        opciones[seleccionada].parentNode.classList.add("incorrecta");
      }
      opciones[correcta - 1].parentNode.classList.add("correcta");
    }
  });

  document.getElementById("resultado").textContent = correctas + " / " + respuestasCorrectas.length;
});