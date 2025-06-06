const respuestasCorrectas = [3,1,3,3,1,2,2,2,1,1];

  document.getElementById("cuestionario").addEventListener("submit", function (e) {
    e.preventDefault();

    let correctas = 0;

    respuestasCorrectas.forEach((correcta, i) => {
      const opciones = document.getElementsByName("p" + i);
      let seleccionada = -1;

      opciones.forEach(r => {
        r.parentNode.classList.remove("correcta", "incorrecta");
        if (r.checked) seleccionada = parseInt(r.value);
      });

      if (seleccionada === correcta) {
        opciones[correcta].parentNode.classList.add("correcta");
        correctas++;
      } else {
        if (seleccionada >= 0) {
          opciones[seleccionada].parentNode.classList.add("incorrecta");
        }
        opciones[correcta].parentNode.classList.add("correcta");
      }
    });

    document.getElementById("resultado").textContent = correctas;
  });