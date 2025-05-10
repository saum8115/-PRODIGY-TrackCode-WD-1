let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = (`${h}:${m}:${s}`);
}

function startTimer() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function addLap() {
  const lapTime = display.innerText;
  const li = document.createElement("li");
  li.textContent = Lap `$ {lapTime}`;
  document.getElementById("laps").appendChild(li);
}

document.getElementById("startBtn").onclick = startTimer;
document.getElementById("pauseBtn").onclick = pauseTimer;
document.getElementById("resetBtn").onclick = resetTimer;
document.getElementById("lapBtn").onclick = addLap;