let score = JSON.parse(localStorage.getItem('score')) || {
    runs: 0,
    balls: 0,
    strikeRate:0
};



function updateScore() {
  document.querySelector('.score-card')
    .innerHTML = `SCORE : ${score.runs}(${score.balls})`;
  score.strikeRate = Math.round((score.runs / score.balls) * 1000) /10 || 0;
  document.querySelector('.strike-rate')
    .innerHTML = `SR : ${score.strikeRate}`;
}

updateScore();

function playGame(playerMove) {

  score.balls++;

  const choice = pickRandomChoice();

  if(Number(playerMove) === choice) {
    alert(`OUT!...\nYou lose your runs are : ${score.runs}(${score.balls}) SR : ${score.strikeRate}`);
    resetScore();
    
  } else {
    result = 'not out';
    score.runs += Number(playerMove);
  }
  
  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector('.game-moves')
    .innerHTML = `You 
    ${playerMove} - ${choice}
    Computer`;

  updateScore();

  
}

function pickRandomChoice() {
  let choice = 0;
  const randomVal = Math.random();
  if(randomVal >= 0 && randomVal < 1/6) {
    choice = 1;
  } else if (randomVal >= 1 / 6 && randomVal < 2 / 6) {
    choice = 2;
  } else if (randomVal >= 2 / 6 && randomVal < 3 / 6){
    choice = 3;
  } else if (randomVal >= 3 / 6 && randomVal < 4 / 6){
    choice = 4;
  } else if (randomVal >= 4 / 6 && randomVal < 5 / 6){
    choice = 5;
  } else if (randomVal >= 5 / 6 && randomVal < 1){
    choice = 6;
  }
  return choice;
}

function resetScore() {
  score.runs = 0;
  score.balls = 0;
  score.strikeRate = 0;
  localStorage.removeItem('score');
  updateScore();
}