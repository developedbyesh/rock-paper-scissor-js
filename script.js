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
  }
}
