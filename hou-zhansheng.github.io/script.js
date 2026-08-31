const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "停";
  } else {
    audio.pause();
    playPauseBtn.textContent = "戳";
  }
});