let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
    losses: 0,
    ties: 0
  };

  let isautoplaying = false;
  let intervalId;


 // const autoplay = () => {};
  
  function autoplay(){
    if (!isautoplaying) {
    intervalId = setInterval(() => {
        const playerMove = pickComputerMove();
       playerGame(playerMove);
      }, 1000);
      isautoplaying = true;
    }
    else {
      clearInterval(intervalId);
      isautoplaying = false;
    }
  }

  document.querySelector('.js-rock-button').addEventListener('click', () => {
   playerGame('Rock');
  });

  document.querySelector('.js-paper-button').addEventListener('click',
    () => {
      playerGame('Paper');
    });

    document.querySelector('.js-scissors-button').addEventListener('click', () => {
      playerGame('Scissors');
    });


    document.body.addEventListener('keydown', (event) => {
      if(event.key === 'r') {
        playerGame('Rock');
      } else if (event.key === 'p') {
        playerGame('Paper');
      } else if (event.key === 's') {
        playerGame('Scissors');
      }
    });

  updateScoreElement();

function playerGame(playerMove) {
 document.querySelector('.js-result').style.display = 'block';
 document.querySelector('.js-moves').style.display = 'block';

const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'Scissors') {
if (computerMove === 'Rock') {
result = 'You loose';
}
else if (computerMove === 'Paper') {
result = 'You Win';
}
else if (computerMove === 'Scissors') {
result = 'Tie';
}
}
else if (playerMove === 'Paper') {
if (computerMove === 'Rock') {
result = 'You Win';
}
else if (computerMove === 'Paper') {
result = 'Tie';
}
else if (computerMove === 'Scissors') {
result = 'You loose';
}
}
else if (playerMove === 'Rock') {
if (computerMove === 'Rock') {
result = 'Tie';
}
else if (computerMove === 'Paper') {
result = 'You loose';
}
else if (computerMove === 'Scissors') {
result = 'You Win';
}
}

if (result === 'You Win') {
score.wins +=1;
}
else if (result === 'You loose') {
score.losses +=1; 
}
else if (result === 'Tie') {
score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score)); 

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;
 }


function updateScoreElement () {
  document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3 ) {
computerMove ='Rock';
}
else if (randomNumber >1/3 && randomNumber <=2/3) {
computerMove ='Paper';
}
else if (randomNumber >2/3 && randomNumber <=1) {
computerMove ='Scissors';
}

return computerMove;
}
