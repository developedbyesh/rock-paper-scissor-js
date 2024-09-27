let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

function generateComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'scissor';
  } else if (randomNumber >= 2 / 3 && randomNumber < 3) {
    computerMove = 'paper';
  }
  return computerMove;
}

function playGame(playerMove) {
  let result = '';
  if (playerMove === 'rock') {
    const computerMove = generateComputerMove();
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
    } else if (computerMove === 'scissor') {
      result = 'You Win.';
    }
  } else if (playerMove === 'paper') {
    const computerMove = generateComputerMove();
    if (computerMove === 'rock') {
      result = 'You Win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissor') {
      result = 'You Lose.';
    }
  } else if (playerMove === 'scissor') {
    const computerMove = generateComputerMove();
    if (computerMove === 'rock') {
      result = 'You Lose.';
    } else if (computerMove === 'paper') {
      result = 'You Win.';
    } else if (computerMove === 'scissor') {
      result = 'Tie.';
    }
  }
  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector(
    '.js-moves'
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" /> 
  <img src="images/${computerMove}-emoji.png" class="move-icon" /> Computer`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
