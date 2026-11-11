// Café Andino - Interacciones

const botonMenu = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-principal');

// 1. Menú adaptable: abrir y cerrar en móvil
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
  botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  botonMenu.textContent = abierto ? '✕' : '☰';
});

// Al elegir un enlace en móvil, el menú se cierra
menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    botonMenu.textContent = '☰';
  });
});

// 2. Formulario de reservas con validación
const formulario = document.getElementById('form-reserva');
const mensaje = document.getElementById('mensaje');
const correo = document.getElementById('correo');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  let valido = true;

  // Campos obligatorios
  formulario.querySelectorAll('[required]').forEach((campo) => {
    const completo = campo.value.trim() !== '';
    campo.classList.toggle('error', !completo);
    if (!completo) valido = false;
  });

  // Formato del correo
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo.value && !formatoCorreo.test(correo.value)) {
    correo.classList.add('error');
    valido = false;
  }

  if (valido) {
    const nombre = document.getElementById('nombre').value.trim();
    mensaje.style.color = '#2e7d32';
    mensaje.textContent = `¡Gracias ${nombre}! Tu reserva fue recibida.`;
    formulario.reset();
  } else {
    mensaje.style.color = '#c0392b';
    mensaje.textContent = 'Revisa los campos marcados en rojo.';
  }
});
