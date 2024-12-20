const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const radioPlayer = document.getElementById('radioPlayer');
const volumeControl = document.getElementById('volumeControl');

// Iniciar autoplay
window.addEventListener('load', () => {
    radioPlayer.play().catch(error => {
        console.log("Autoplay bloqueado por el navegador. El usuario debe interactuar para iniciar la reproducción.");
    });
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
});

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (radioPlayer.paused) {
        radioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        radioPlayer.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

// Volume control
volumeControl.addEventListener('input', (e) => {
    radioPlayer.volume = e.target.value;
});
