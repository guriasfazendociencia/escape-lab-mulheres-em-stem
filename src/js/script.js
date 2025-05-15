const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let time = 20 * 60; // 20 minutes in seconds

function updateTimer() {
    const mins = Math.floor(time / 60);
    const secs = time % 60;

    minutos.textContent = String(mins).padStart(2, '0');
    segundos.textContent = String(secs).padStart(2, '0');

    if (time > 0) {
    time--;
    } else {
    clearInterval(timerInterval);
    alert("O tempo acabou!");
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
