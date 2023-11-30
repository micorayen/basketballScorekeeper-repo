// Home and Guest Team Score Elements
const p1 = {
  score: 0,
  buttonAdd: document.getElementById("player1AddScoreButton"),
  buttonDeduct: document.getElementById("player1DeductScoreButton"),
  display: document.getElementById("player1ScoreDisplay"),
};

const p2 = {
  score: 0,
  buttonAdd: document.getElementById("player2AddScoreButton"),
  buttonDeduct: document.getElementById("player2DeductScoreButton"),
  display: document.getElementById("player2ScoreDisplay"),
};

let winningScore = 10;
let isGameOver = false;

// Function for Adding & Deducting Scores
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
  }
}

function deductScore(player, opponent) {
  if (!isGameOver) {
    player.score -= 1;
    player.display.textContent = player.score;
  }
}

// Event listeners for Home & Guest Team Score Buttons
p1.buttonAdd.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.buttonAdd.addEventListener("click", () => {
  updateScore(p2, p1);
});

p1.buttonDeduct.addEventListener("click", () => {
  deductScore(p1, p2);
});

p2.buttonDeduct.addEventListener("click", () => {
  deductScore(p2, p1);
});

// Feature: Clock ====================
const btn_minsToAdd = document.getElementById("mins_to_add");
const btn_minsToDeduct = document.getElementById("mins_to_deduct");
const btn_secsToAdd = document.getElementById("secs_to_add");
const btn_secsToDeduct = document.getElementById("secs_to_deduct");

const btnStart = document.getElementById("start");
const btnPause = document.getElementById("stop");

// Parameters
let count = 65;
let display = document.querySelector("#time");

let timer = count;
let minutes;
let seconds;
let intervalId;

function startTimer(duration, display) {
  intervalId = setInterval(function () {
    updateDisplay();

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
    btn_minsToAdd.disabled = false;
    btn_minsToDeduct.disabled = false;
    btn_secsToAdd.disabled = false;
    btn_secsToDeduct.disabled = false;
  });
}

//=== Display: Timer
function updateDisplay(minutes, seconds) {
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;
}

//=== Run/Resume Timer
window.onload = function () {
  btnStart.addEventListener("click", function () {
    console.log(`Current: ${timer}`);
    startTimer(timer, display);
    btnStart.disabled = true;
    btn_minsToAdd.disabled = true;
    btn_minsToDeduct.disabled = true;
    btn_secsToAdd.disabled = true;
    btn_secsToDeduct.disabled = true;
  });
};

//=== Add/Deduct Mins & Secs to Clock
btn_minsToAdd.addEventListener("click", function () {
  timer += 60;
  updateDisplay();
});

btn_minsToDeduct.addEventListener("click", function () {
  timer -= 60;
  updateDisplay();
});

btn_secsToAdd.addEventListener("click", function () {
  timer += 1;
  updateDisplay();
});

btn_secsToDeduct.addEventListener("click", function () {
  timer -= 1;
  updateDisplay();
});
