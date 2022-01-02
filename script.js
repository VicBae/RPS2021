
// Function of RPS result by computer, it's based on math.random()
function computerPlay(){
    let dice = Math.floor(Math.random()*3)
    if(dice==0){
        return 'Rock'
    }
    else if(dice==1){
        return 'Paper'
    }
    else return 'Scissors'
}


// vanilla function that takes input of player's play and computer's play and print out who won. It converts any upper case or lower case in same format
function playGame(e){
    let P = e.target.textContent.toLowerCase()
    let C = computerPlay().toLowerCase()
    let resultP = P[0].toUpperCase() + P.slice(1).toLowerCase()
    let resultC = C[0].toUpperCase() + C.slice(1).toLowerCase()
    if(P=='rock' && C=='scissors'){
        return `You won! ${resultP} beats ${resultC}`
    }
    else if(P=='rock' && C=='rock'){
        return 'Draw!'
    }
    else if(P=='rock' && C=='paper'){
        return `You lost! ${resultC} beats ${resultP}`
    }
    else if(P=='paper' && C=='scissors'){
        return `You lost! ${resultC} beats ${resultP}`
    }
    else if(P=='paper' && C=='rock'){
        return `You won! ${resultP} beats ${resultC}`
    }
    else if(P=='paper' && C=='paper'){
        return 'Draw!'
    }
    else if(P=='scissors' && C=='rock'){
        return `You lost! ${resultC} beats ${resultP}`
    }
    else if(P=='scissors' && C=='paper'){
        return `You won! ${resultP} beats ${resultC}`
    }
    else if(P=='scissors' && C=='scissors'){
        return 'Draw!'
    }
    else return 'wrong input. Try it again'
}
let PScore=0;
let CScore=0;

// scoreBoard function to update scores everytime button is clicked
function scoreBoard(){
    
    if(PScore != 5 && CScore!=5){
        scoreboard.textContent = `Final result is ${PScore} to ${CScore}`
    }
    else if (PScore == 5 ){
        scoreboard.textContent = 'Game Set! Player Won!'
        PScore=0
        CScore=0
        rock.removeEventListener('click',game)
        paper.removeEventListener('click',game)
        scissors.removeEventListener('click',game)
    }
    else if(CScore ==5){
        scoreboard.textContent = 'Game Set! Computer won!'
        PScore=0
        CScore=0
        rock.removeEventListener('click',game)
        paper.removeEventListener('click',game)
        scissors.removeEventListener('click',game)
    }
}

// actual game function, it takes the previous functions of randomized computer play + printing results of game
function game(e){
        let result = playGame(e)
        //Conditional for keeping score
        if(result[4]=='w'){
            PScore++
        }
        else if(result[4]=='l'){
            CScore++
        }
    
        scoreBoard()

    
    // if(PScore>CScore){console.log('Player Won!')}
    // else if(PScore==CScore){console.log('Draw!')}
    // else console.log('Player')
}


// let x = prompt('input number','')
// while((x==''|| x== null ||x<=100)&& x){
//     x= prompt('try it again','')
// }


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

const scoreboard = document.querySelector('.score')


rock.addEventListener('click',game)
paper.addEventListener('click',game)
scissors.addEventListener('click',game)
