const VALID_USER = 'admin';
const VALID_PASS = '1357';

const btnLogin = document.getElementById('btnLogin');
const usuarioInput = document.getElementById('usuario');
const contrasenaInput = document.getElementById('contrasena');
const alertContainer = document.getElementById('alertContainer');
const logoContainer = document.getElementById('logoContainer');

function mostrarAlerta(mensaje, tipo = 'danger') {
  alertContainer.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert" style="margin-top: 20px">
      ${mensaje}
      <button type="button" class="btn-close" id="customCloseBtn" aria-label="Cerrar"></button>
    </div>
  `;

  const closeBtn = document.getElementById('customCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      alertContainer.innerHTML = '';
      restaurarLogo();
    });
  }
}

function restaurarLogo() {
  logoContainer.innerHTML = `<img src="img/box-arrow-in-right.svg" alt="Logo" width="72" height="57">`;
}

function cambiarLogoError() {
  logoContainer.innerHTML = `<i class="bi bi-x-circle-fill text-danger" style="font-size: 57px; display: block; line-height: 1;"></i>`;
}

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  const usuario = usuarioInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  if (usuario === '' || contrasena === '') {
    mostrarAlerta('¡Existen campos sin datos...! Por favor, completa ambos.', 'warning');
    setTimeout(function () {
      alertContainer.innerHTML = '';
    }, 2500);
    return;
  }

  if (usuario === VALID_USER && contrasena === VALID_PASS) {
    mostrarAlerta("¡Autenticación correcta! Redirigiendo...", "success");
    setTimeout(function () {
    window.location.href = "dashboard.html";
    }, 2000);
  } else {
    mostrarAlerta('Error en la autentificación. Credenciales incorrectas.', 'danger');
    cambiarLogoError();
    setTimeout(function () {
      alertContainer.innerHTML = '';
      restaurarLogo();
    }, 2500);
  }
});