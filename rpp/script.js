

function computerPlay() {
    x = Math.floor(Math.random() * 3)
    if (x == 0) {
        return 'rock'
    }
    if (x == 1) {
        return 'paper'
    }
    if (x == 2) {
        return 'scissors'
    }
}

let my_score = 0
let computer_score = 0
const scoreboard = document.querySelector("#score")
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "Tie!"
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        if (computer_score < 5) {
            computer_score++
        }
        
        return "Sorry! Paper beats rock :("
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        if (my_score < 5) {
            my_score++
        } 
        return "Yay! Rock beats scissors!"
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        if (my_score < 5) {
            my_score++
        } 
        return "Yay! Paper beats rock!"
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        if (computer_score < 5) {
            computer_score++
        }
        return "Sorry! Scissors beats paper :("
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        if (computer_score < 5) {
            computer_score++
        }
        return "Sorry! Rock beats scissors :("
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        if (my_score < 5) {
            my_score++
        } 
        return "Yay! Scissors beats paper!"
        
    }

}

function isValid(s) {
    if (s.toLowerCase() == "rock" || s.toLowerCase() == "paper" || s.toLowerCase() == "scissors") {
        return true
    }
    else {
        
        return false
    }
}
let run = true
const buttons = document.querySelectorAll('button');
const res = document.querySelector('#result');
const main = document.querySelector('#main');
scoreboard.textContent = "my score: " + my_score + " computer score: " + computer_score
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
    if (run == true) {
        res.textContent = playRound(button.id, computerPlay())
        scoreboard.textContent = "my score: " + my_score + " computer score: " + computer_score
        if (my_score == 5) {
            res.textContent = "Congratulations, you got to 5 points first!"
            run = false
            main.appendChild(again)
            
            
        }
        if (computer_score == 5) {
            res.textContent = "Sorry, the computer beat you to 5..."
            run = false
            main.appendChild(again)
            
            
            
            
        }
    }
    
  });
});


let again = document.createElement('button');
again.textContent = "Play Again"
again.setAttribute('style', 'color: blue; background: white;');
again.setAttribute('id', 'again')

again.addEventListener('click', () => {
    run = true
    res.textContent = ""
    my_score = 0
    computer_score = 0
    scoreboard.textContent = "my score: " + my_score + " computer score: " + computer_score
})

// for (let i = 1; i<6;i++){
//     console.log("Round: " + i.toString())
//     let input = prompt("Choose Rock, Paper or Scissors:")
    
//     while(isValid(input) != true) {
//         input = prompt("Invalid choice. Choose Rock, Paper or Scissors:")
//     }
//     let computerSelection = computerPlay()
//     console.log(playRound(input, computerSelection))
// }









