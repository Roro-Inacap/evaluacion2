let numero = 15;

const btnPresioname = document.getElementById('btnPresioname');
const miCard = document.getElementById('miCard');
const cardHeader = document.getElementById('cardHeader');
const cardImg = document.getElementById('cardImg');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const cardFooter = document.getElementById('cardFooter');

function actualizarEstado() {
  btnPresioname.textContent = `Presióname ${numero}`;
  cardFooter.textContent = numero;

  let fase;
  if (numero >= 11 && numero <= 15) {
    fase = 1;
  } else if (numero >= 6 && numero <= 10) {
    fase = 2;
  } else if (numero >= 1 && numero <= 5) {
    fase = 3;
  } else {
    numero = 15;
    actualizarEstado();
    return;
  }

  switch (fase) {
    case 1:
      btnPresioname.className = 'btn btn-primary btn-lg';
      miCard.className = 'card border-primary';
      cardHeader.className = 'card-header bg-primary text-white';
      cardHeader.textContent = 'Estado de Batería: Carga completa';
      cardImg.src = 'img/bateria_full.jpg';
      cardTitle.textContent = 'Fase 1: Inicio';
      cardDesc.textContent = 'Presiona el botón para comenzar el conteo. Esta es la fase inicial.';
      cardFooter.className = 'card-footer bg-primary text-white';
      break;

    case 2:
      btnPresioname.className = 'btn btn-warning btn-lg';
      miCard.className = 'card border-warning';
      cardHeader.className = 'card-header bg-warning text-dark';
      cardHeader.textContent = 'Estado de Batería: Intermedio';
      cardImg.src = 'img/bateria_media.jpg';
      cardTitle.textContent = 'Fase 2: Advertencia';
      cardDesc.textContent = 'El conteo está disminuyendo. ¡Cuidado!';
      cardFooter.className = 'card-footer bg-warning text-dark';
      break;

    case 3:
      btnPresioname.className = 'btn btn-danger btn-lg';
      miCard.className = 'card border-danger';
      cardHeader.className = 'card-header bg-danger text-white';
      cardHeader.textContent = 'Estado de Batería: Crítico';
      cardImg.src = 'img/bateria_minima.jpg';
      cardTitle.textContent = 'Fase 3: Peligro';
      cardDesc.textContent = '¡El número está muy bajo! Prepárate para el reinicio.';
      cardFooter.className = 'card-footer bg-danger text-white';
      break;

    default:
      break;
  }
}

btnPresioname.addEventListener('click', function() {
  numero--;
  actualizarEstado();
});

actualizarEstado();