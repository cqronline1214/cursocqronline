document.addEventListener("DOMContentLoaded", function () {
  const respuestasCorrectas = [3, 3, 2, 2, 1, 2, 1, 3, 3, 1];

  document.getElementById("cuestionario").addEventListener("submit", function (e) {
    e.preventDefault();

    let correctas = 0;

    respuestasCorrectas.forEach((correcta, i) => {
      const opciones = document.getElementsByName("p" + i);
      let seleccionada = -1;

      Array.from(opciones).forEach((r, index) => {
        r.parentNode.classList.remove("correcta", "incorrecta");
        if (r.checked) seleccionada = parseInt(r.value) + 1;
      });

      if (seleccionada === correcta) {
        opciones[correcta - 1].parentNode.classList.add("correcta");
        correctas++;
      } else {
        if (seleccionada >= 0) {
          opciones[seleccionada - 1].parentNode.classList.add("incorrecta");
        }
        opciones[correcta - 1].parentNode.classList.add("correcta");
      }
    });

    document.getElementById("resultado").textContent = `${correctas} / ${respuestasCorrectas.length}`;
  });
});