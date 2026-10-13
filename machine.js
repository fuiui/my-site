// Activity 1: ready -> moving -> almost done -> retreat -> ready.
const startButton = document.getElementById('machine-start');
const progress = document.getElementById('machine-progress');
const progressNumber = document.getElementById('progress-number');
const machineStatus = document.getElementById('machine-status');
let machineBusy = false;

function setProgress(value, message) {
  progress.value = value;
  progress.textContent = `${value}%`;
  progressNumber.textContent = `${value}%`;
  machineStatus.textContent = message;
}

startButton.disabled = false;
startButton.addEventListener('click', () => {
  // Ignore repeated activation while a cycle is already running.
  if (machineBusy) return;
  machineBusy = true;
  startButton.setAttribute('aria-disabled', 'true');
  setProgress(25, 'Excellent. We are looking very productive.');
  setTimeout(() => setProgress(65, 'So much progress. Surely this is useful.'), 500);
  setTimeout(() => setProgress(99, '99%. One moment. What were we doing?'), 1000);
  setTimeout(() => setProgress(12, 'Never mind. Returning all that progress.'), 1800);
  setTimeout(() => {
    setProgress(0, 'Ready to accomplish absolutely nothing.');
    machineBusy = false;
    startButton.removeAttribute('aria-disabled');
  }, 2600);
});

// Activity 2: a fresh secret, six valid guesses, and an explicit end state.
const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const submit = document.getElementById('guess-submit');
const restart = document.getElementById('game-restart');
const feedback = document.getElementById('game-feedback');
const attempts = document.getElementById('attempts');
const history = document.getElementById('guess-history');
let secret;
let remaining;
let finished;
let previousGuesses;

function newGame() {
  secret = Math.floor(Math.random() * 20) + 1;
  remaining = 6;
  finished = false;
  previousGuesses = [];
  input.disabled = false;
  submit.disabled = false;
  restart.disabled = false;
  input.value = '';
  input.removeAttribute('aria-invalid');
  history.replaceChildren();
  attempts.textContent = 'Tries left: 6';
  feedback.textContent = 'A number is waiting. Make your first guess.';
}

function endGame(message) {
  finished = true;
  input.disabled = true;
  submit.disabled = true;
  feedback.textContent = message;
  restart.focus();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (finished) return;
  const guess = Number(input.value);
  if (input.value.trim() === '' || !Number.isInteger(guess) || guess < 1 || guess > 20) {
    input.setAttribute('aria-invalid', 'true');
    feedback.textContent = 'Enter a whole number from 1 to 20. No try was used.';
    input.focus();
    return;
  }
  input.removeAttribute('aria-invalid');
  if (previousGuesses.includes(guess)) {
    feedback.textContent = 'You already tried that number. Pick a different one; no try was used.';
    input.select();
    return;
  }
  previousGuesses.push(guess);
  remaining -= 1;
  attempts.textContent = `Tries left: ${remaining}`;
  const result = guess === secret ? 'Correct!' : guess < secret ? 'Go higher.' : 'Go lower.';
  const entry = document.createElement('li');
  entry.textContent = `${guess} — ${result}`;
  history.append(entry);
  if (guess === secret) {
    endGame(`You found it! The number was ${secret}. Tries used: ${6 - remaining}.`);
  } else if (remaining === 0) {
    endGame(`No tries left. The number was ${secret}. Start a new game to try again.`);
  } else {
    feedback.textContent = result;
    input.select();
  }
});

restart.addEventListener('click', () => {
  newGame();
  input.focus();
});
newGame();
