  let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
updatedScoreElement();

/*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */
let isAUtoplaying=false;
let InterValId;


function autoplay(){
  if(!isAUtoplaying){
     intervalID=setInterval(()=> {
      
    const playerMove=pickComputerMove();
    playGame(playerMove);
  }, 1000);
  isAUtoplaying=true;
  document.querySelector('.Auto-play').innerHTML='Auto Play'
  }else{
    
clearInterval(intervalID);
isAUtoplaying=false;
document.querySelector('.Auto-play').innerHTML='Stop Playing'
  }
 
}
document.querySelector('.Auto-play').addEventListener('click',()=>{

  autoplay();
})


document.body.addEventListener('keydown',(event)=>{
  if(event.key==='a'){
    autoplay();
  }
})




document.querySelector('.js-rock-button').addEventListener('click',()=>{
   playGame('rock')
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
   playGame('paper')
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
   playGame('scissors')
})

document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
playGame('rock')
}
else if(event.key==='p'){
  playGame('paper')
}else if(event.key==='s'){
  playGame('scissors')
}
 else  if(event.key==='m'){
reset();         
      }
})


      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));


updatedScoreElement();

document.querySelector('.js-result').innerHTML =`You 
<img src="./${playerMove}-emoji.png"" alt="">
<img src="./${computerMove}-emoji.png" alt="">
Computer`

 document.querySelector('.js-move').innerHTML =`${result}`;
    }

      


function updatedScoreElement(){
    document.querySelector('.js-score').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;}



      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;

      }
      document.querySelector('.rest').addEventListener('click',()=>{
         score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updatedScoreElement();
      reset();
      showResetconfirmation();
      })


      

      function reset(){
         score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updatedScoreElement();
      showResetconfirmation();
      
      }
function showResetconfirmation(){
  document.querySelector('.js-messages').innerHTML=`<div class="js-para">Are you sure You want to reset the score?? <Button class="js-yes">YES</Button><button class="js-No">NO</button> </div>`


document.querySelector('.js-yes').addEventListener('click',()=>{
        reset();
        hideResetconfirmation();
      })
document.querySelector('.js-No').addEventListener('click',()=>{
  hideResetconfirmation();
})

}
    function hideResetconfirmation(){
      document.querySelector('.js-messages').innerHTML='';
    }  
     