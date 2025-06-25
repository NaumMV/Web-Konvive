const tiempoAcceso = localStorage.getItem("tiempoAcceso");

if (!tiempoAcceso) {
  alert("No tienes acceso.");
  window.location.href = "acceso.html";
} else {
  const ahora = Date.now();
  const minutosPermitidos = 30;

  if (ahora - tiempoAcceso > minutosPermitidos * 60000) {
    alert("Tu acceso ha expirado.");
    localStorage.removeItem("tiempoAcceso");
    window.location.href = "acceso.html";
  }
}