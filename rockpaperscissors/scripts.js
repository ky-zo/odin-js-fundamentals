let gameResult = 0 

function getComputerChoice() {
    //Generate number from 1 to 3
    let randNumber = Math.floor(Math.random()*3)+1
    let computerChoice
    //For each number, assign the choice
    switch (randNumber){
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'scissors'
            break;
        case 3:
            computerChoice = 'paper'
            break
        default:
            console.log('This function is not working correctly')
    }
    //Print Computer's choice:
    console.log(`Computer's choice: ${computerChoice}`)
    return computerChoice
}

// function playerChoice() {
//     let choice = prompt("Rock, Paper, Scissors?")
//     choice = choice.toLowerCase()
//     choice === 'rock' || choice === 'paper' || choice === 'scissors' ? console.log(`Your choice: ${choice}`) : console.log(`${choice} is not possible. Try again`)
//     return choice
//}

function game(player,computer) {
    let result = '';
    if (player === computer) {
        result = 0
    } else if ( player === 'rock') {
        switch (computer){
            case 'paper':
                result = -1; //0 means computer wins
                break;
            case 'scissors':
                result = 1 //1 means player wins
                break;
        }
    } else if (player === 'paper') {
        switch (computer) {
            case 'rock':
                result = 1; // Player(Paper) wins with Rock = 1
                break;
            case 'scissors':
                result = -1; // Computer(Scissors) wins with Paper = 0
                break;
        }
    } else {
        switch (computer) {
            case 'rock':
                result = -1; //Computer (Rock) wins with Player (Scissors)
                break;
            case 'paper':
                result = 1;
                break;
        }
    }
    return result
}

// function playGame() {


//     switch(game(playerChoice(),getComputerChoice())){
//         case 1:
//             console.log('You win!')
//             break;
//         case -1:
//             console.log('You lost!')
//             break;
//         case 0:
//             console.log('It`s a tie!')
//     }
// }


// function playGame(playerPick) {
    // let gameResult = 0
    // for (let i = 1; i < 6; i++) {
        // switch(game(playerPick,getComputerChoice())){
        //     case 1:
        //         gameResult = gameResult + 1
        //         console.log(`Round ${i} won by Player. Score: ${gameResult}`)
        //         break;
        //     case -1:
        //         gameResult = gameResult - 1
        //         console.log(`Round ${i} won by Computer. Score: ${gameResult}`)
        //         break;
        //     case 0:
        //         console.log(`Round ${i} is a tie. Score: ${gameResult}`)
        //         break;
        // }
    
//     alert('Ready for the final score?')
//     console.log(gameResult)
//     console
//     if(gameResult === 0){
//         alert('Tie!')
//     } else if (gameResult > 0){
//         alert(`You Win`);
//     } else {
//         alert('You played like shit and lost');
//     }
// }

//Select all the buttons
const buttons = document.querySelectorAll('button')

function showRound(pPick,cPick,score,totalScore){
    const results = document.querySelector('.results')
    const result = document.createElement('div')
    const roundResult = document.createElement('div')
        roundResult.innerText = `${pPick} vs. ${cPick}... ${roundResults(score)}`    
    const totalResult = document.createElement('div')
        totalResult.innerText = `Total Score: ${totalScore}`
    
    result.append(roundResult)
    result.append(totalResult)
    results.append(result)
}

function roundResults (score){
    switch(score){
        case 0:
            return ` Tie! Score: ${score}`
        case -1:
            return ` You lost! Score: ${score}`
        case 1:
            return ` You win! Score: ${score}`    
    }
}

// Provide previous score & new game result to return the updated score
function updateGameResult(previousScore,gameResult) {
    switch(gameResult){
        case 1:
            return previousScore + 1
        case -1:
            return previousScore - 1
        case 0:
            return previousScore
    }
}

//Add 'click' event listener for every clickable button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //Print out Player's choice
        let pPick = button.className
        let cPick = getComputerChoice()
        let roundResult = game(pPick,cPick)
        gameResult = updateGameResult(gameResult,roundResult)
        console.log(gameResult)
        showRound(pPick,cPick,roundResult,gameResult)
        // console.log(`[1] New click: ${pPick}`);
        // console.log(`[2] gameResult before update: ${gameResult}`)
        // gameResult = updateGameResult(gameResult,playRound(pPick,cPick,game(pPick,cPick),gameResult))
        // console.log(`[3] gameResult after update: ${gameResult}`)
        // console.log(`------------`)
    })
})

console.log(buttons)
