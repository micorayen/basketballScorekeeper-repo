// Feature: Clock ====================

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("stop");
// Parameters
const count = 65;
const display = document.querySelector("#time");

let timer = count;
let minutes;
let seconds;

function startTimer(duration, display) {
  let intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    //=== Display: Timer:
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    //=== Timer: Countdown
    if (--timer < 0) {
      // timer = duration; // Repeating Countdown
      clearInterval(intervalId);
      btnPause.disabled = true;
    }
  }, 1000);

  //=== Stop/Pause Timer:
  btnPause.addEventListener("click", function () {
    clearInterval(intervalId);
    btnStart.disabled = false;
  });
}

//=== Run/Resume Timer
window.onload = function () {
  btnStart.addEventListener("click", function () {
    startTimer(count, display);
    btnStart.disabled = true;
  });
};
