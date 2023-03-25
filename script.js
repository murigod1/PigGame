'use strict';

    // Selecting elements 
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

    // Starting conditions 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

    // Rolling Dice
btnRoll.addEventListener('click', function(){
    if(playing){
    // genereting random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // src img of the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 
    if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}
});

btnHold.addEventListener('click', function(){
    if(playing) {
        //1. add current score to active player
        // scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. check if player's score >= 100
        //Finish game
    if(scores[activePlayer] >= 100 ){
        //3.Switch the player
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    } else {
        switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
    document.querySelector(`.player--${activePlayer}`).
    classList.remove('player--winner');
    
    score0El.textContent = 0;
    scores[0] = 0;
    
    score1El.textContent = 0;
    scores[1] = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
    currentScore = 0;

    diceEl.classList.add('hidden');

    player0.classList.add('player--active');
    player1.classList.remove('player-active');

    activePlayer = 0;

    playing = true;
    
})