const startingTime = 10;
let time = startingTime * 60;

const coundownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  coundownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
