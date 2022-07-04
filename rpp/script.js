

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return "Tie!"
    }

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "Sorry! Paper beats rock :("
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "Yay! Rock beats scissors!"
    }
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "Yay! Paper beats rock!"
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "Sorry! Scissors beats paper :("
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "Sorry! Rock beats scissors :("
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
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
for (let i = 1; i<6;i++){
    console.log("Round: " + i.toString())
    let input = prompt("Choose Rock, Paper or Scissors:")
    
    while(isValid(input) != true) {
        input = prompt("Invalid choice. Choose Rock, Paper or Scissors:")
    }
    let computerSelection = computerPlay()
    console.log(playRound(input, computerSelection))
}









