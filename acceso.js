function verificarCodigo() {
  const codigoCorrecto = "12345"; // puedes cambiarlo por otro
  const codigoIngresado = document.getElementById("codigo").value;

  if (codigoIngresado === codigoCorrecto) {
    localStorage.setItem("tiempoAcceso", Date.now());
    window.location.href = "zona-secreta.html";
  } else {
    alert("Código incorrecto.");
  }
}