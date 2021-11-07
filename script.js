'use strict';

// Selecting Elements :
const p0El = document.querySelector('.player--0');
const p1El = document.querySelector('.player--1');

const p0ScoreEl = document.querySelector('#score--0');
const p1ScoreEl = document.querySelector('#score--1');

const p0CurrentEl = document.querySelector('#current--0');
const p1CurrentEl = document.querySelector('#current--1');

const img = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// Seetting the Start :

let playing, activeP, current, score;

const start = () => {
  p0El.classList.add('player--active');
  p0El.classList.remove('player--winner');
  p1El.classList.remove('player--active');
  p1El.classList.remove('player--winner');
  img.classList.add('hidden');
  p0ScoreEl.textContent = '0';
  p1ScoreEl.textContent = '0';
  p0CurrentEl.textContent = 0;
  p1CurrentEl.textContent = 0;
  playing = true;
  activeP = 0;
  current = 0;
  score = [0, 0];
};

const switchP = () => {
  document.querySelector(`#current--${activeP}`).textContent = 0;
  activeP = activeP === 0 ? 1 : 0;
  current = 0;
  p0El.classList.toggle('player--active');
  p1El.classList.toggle('player--active');
};

start();

rollDice.addEventListener('click', function () {
  if (playing) {
    const aRam = Math.trunc(Math.random() * 6) + 1;
    img.classList.remove('hidden');
    img.setAttribute('src', `dice-${aRam}.png`);

    if (aRam !== 1) {
      current += aRam;
      document.querySelector(`#current--${activeP}`).textContent = current;
    } else {
      switchP();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    score[activeP] += current;
    document.querySelector(`#score--${activeP}`).textContent = score[activeP];
    if (score[activeP] >= 100) {
      document
        .querySelector(`.player--${activeP}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeP}`)
        .classList.remove('player--active');
      img.classList.add('hidden');
      playing = false;
    } else {
      switchP();
    }
  }
});

newGame.addEventListener('click', start);

x();
console.log(x);
function x() {
  console.log('hoisting Works !!');
}

console.log(y);
let y = 5;
