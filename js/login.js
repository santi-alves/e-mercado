/* ---------- Limpia localStorage DEJAR o QUITAR? ---------- */
/* localStorage.clear(); */
/* window.localStorage.removeItem("userEmail"); */
/* --------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  /* --------------- Definicion de Variables  --------------- */
  const btnInSesion = document.querySelector("#idInSesion");
  const loginForm = document.querySelector("#idLoginForm");
  /* const lblInvalidPassword = document.querySelector("#idLblInvalidPassword"); */
  let inptEmail = document.querySelector("#idEmail");
  /* ------------------------------------------------------------- */

  /* ----------------- Bootstrap validación de login -------------------- */
  btnInSesion.addEventListener("click", function () {
    if (!loginForm.checkValidity()) {
      loginForm.classList.add("was-validated");
    } else {
      /* ---------------- Guarda email del usuario en localStorage para mostrarlo luego en la barra de navegación ------------------ */
      localStorage.setItem("userEmail", inptEmail.value);
      /* --------------------------- */
      /* ----------- Redireccionamiento a la Página principal ----------- */
      window.location.href = "home.html";
    }
  });
});