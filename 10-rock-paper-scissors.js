// using object. inorder to keep previous tracks , we are kee@ing it outside function.
const score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses :0,
    tie: 0
};

updateScoreElement();


function playGame(playerMove){
    const computerMove= pickComputerMove();

    let result = '';
    if(playerMove=== 'scissor'){
        if(computerMove === 'rock'){
        result = 'Lost';
    } else if (computerMove === 'paper'){
        result = 'Won';
    } else if(computerMove === 'scissor'){
        result = 'Tie'
    }
    } else if(playerMove==='paper'){
        
            if(computerMove === 'rock'){
                result = 'Won';
            } else if (computerMove === 'paper'){
                result = 'Tie';
            } else if(computerMove === 'scissor'){
                result = ' Lost'
            }

    }else if (playerMove==='rock'){
        if(computerMove === 'rock'){
        result = 'Tie';
    } else if (computerMove === 'paper'){
        result = 'Lost';
    } else if(computerMove === 'scissor'){
        result = 'Won'
    }
    }
    // update the score
    if(result=== 'Won'){
        score.wins+=1;
    } else if(result==='Lost'){
        score.losses+=1;

    }else if(result==='Tie'){
        score.tie+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));  //supports only string


     updateScoreElement();
    
     document.querySelector('.js-result').innerHTML = result;

     document.querySelector('.js-moves').innerHTML = `YOu 
<img src="images/${playerMove}.png" class="move-icon">
<img src="images/${computerMove}.png" class="move-icon">
Computer`;


    }

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;

     }

    let computerMove = ' ';

    function pickComputerMove(){
    const randomNumber = Math.random();

        if(randomNumber>=0 && randomNumber< 1/3){
        computerMove = 'rock';
        } else if(randomNumber>= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
        }else if (randomNumber >=2/3 && randomNumber<1){
        computerMove = 'scissor';

        }
        return computerMove;

        }