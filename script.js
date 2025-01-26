document.querySelector('.heart').addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'cartita.pdf', true); // Asegúrate de que sea el mismo nombre de tu carta, al nombre escrito en esta línea.
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'CartitaAri.pdf'; // Nombre con el que se descarga la carta
      link.click();
      window.URL.revokeObjectURL(link.href);
    } else {
      console.error('No se pudo descargar el archivo.');
    }
  };
  xhr.send();
});

var savedCountdown = localStorage.getItem('countDownDate');
var countDownMinutes = 48; // Define el tiempo en horas para la cuenta regresiva
var countDownDate;

if (!savedCountdown) {
  countDownDate = new Date().getTime() + countDownMinutes * 60 * 60 * 1000;
  localStorage.setItem('countDownDate', countDownDate.toString());
} else {
  countDownDate = parseInt(savedCountdown, 10);
}

// Actualiza el texto con un mensaje inicial
document.getElementById("countdown").textContent = "¡Tu nueva carta ya está disponible!";

// Inicia el temporizador
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance > 0) {
    // Si aún no ha llegado el momento, actualiza el mensaje o texto.
    document.getElementById("countdown").textContent = "¡Tu nueva carta ya está disponible!";
  } else {
    // Si el temporizador ha terminado, muestra un mensaje específico.
    clearInterval(x); // Detiene el temporizador
    document.getElementById("countdown").textContent = "¡Tu nueva carta ya está disponible!";
    // localStorage.removeItem('countDownDate'); // Limpia el almacenamiento si el tiempo ha expirado
  }
}, 1000);