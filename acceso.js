function verificarCodigo() {
  const codigoCorrecto = "12345"; // Puedes cambiarlo
  const codigoIngresado = document.getElementById("codigo").value;

  if (codigoIngresado === codigoCorrecto) {
    localStorage.setItem("tiempoAcceso", Date.now());
    window.location.href = "./index.html";
  } else {
    alert("Código incorrecto.");
  }
}