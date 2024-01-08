let rockEl = document.getElementById("rock-el")
let paperEl = document.getElementById("paper-el")
let scissorEl = document.getElementById("scissors-el")
let resultEl = document.getElementById("result-el")
let moveEl = document.getElementById("move-el")
let scoreEL = document.getElementById("score-el")
let resetScoreEl = document.getElementById("reset-el")

rockEl.addEventListener("click", () => {
    runGame("Rock")
})

resetScoreEl.addEventListener("click", () => {
    localStorage.setItem("Wins", 0)
    localStorage.setItem("Ties", 0)
    localStorage.setItem("Losses", 0)

    updateScore()
})

paperEl.addEventListener("click", () => {
    runGame("Paper")
})

scissorEl.addEventListener("click", () => {
    runGame("Scissor")
})

localStorage.setItem("Wins", 0)
localStorage.setItem("Ties", 0)
localStorage.setItem("Losses", 0)

function updateScore() {
    scoreEL.innerHTML = `Wins: ${localStorage.getItem('Wins')} Ties: ${localStorage.getItem('Ties')} Losses: ${localStorage.getItem('Losses')}`
}

function getComputerMove() {
    let compMoveInt = Math.floor(Math.random() * 3)
    let compMove

    if (compMoveInt === 0) {
        compMove = "Rock"
    }

    else if (compMoveInt === 1) {
        compMove = "Paper"
    }

    else {
        compMove = "Scissors"
    }

    return compMove
}

function runGame(move) {

    let compMove = getComputerMove()

    if (move === "Paper") {
        if (compMove === "Rock") {
            resultEl.innerText = "You Win!!!"
            moveEl.innerHTML = "Your Move: <img src='paper-emoji.png' class='move-icon'>, Computer Move: <img src='rock-emoji.png' class='move-icon'>"
            let winsCount = JSON.parse(localStorage.getItem("Wins"))
            winsCount++
            localStorage.setItem("Wins", winsCount)
            updateScore()
        }
        else if (compMove === "Paper") {
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='paper-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
            let tiesCount = JSON.parse(localStorage.getItem("Ties"))
            tiesCount++
            localStorage.setItem("Ties", tiesCount)
            updateScore()
        }
        else {
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='paper-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
            let loseCount = JSON.parse(localStorage.getItem("Losses"))
            loseCount++
            localStorage.setItem("Losses", loseCount)
            updateScore()
        }
    }

    else if (move === "Rock") {
        if (compMove === "Rock") {
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='rock-emoji.png' class='move-icon'>"
            let tiesCount = JSON.parse(localStorage.getItem("Ties"))
            tiesCount++
            localStorage.setItem("Ties", tiesCount)
            updateScore()
        }
        else if (compMove === "Paper") {
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
            let loseCount = JSON.parse(localStorage.getItem("Losses"))
            loseCount++
            localStorage.setItem("Losses", loseCount)
            updateScore()
        }
        else {
            resultEl.innerText = "You Win!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
            let winsCount = JSON.parse(localStorage.getItem("Wins"))
            winsCount++
            localStorage.setItem("Wins", winsCount)
            updateScore()
        }
    }

    else {
        if (compMove === "Paper") {
            resultEl.innerText = "You Win!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
            let winsCount = JSON.parse(localStorage.getItem("Wins"))
            winsCount++
            localStorage.setItem("Wins", winsCount)
            updateScore()
        }
        else if (compMove === "Scissors") {
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
            let tiesCount = JSON.parse(localStorage.getItem("Ties"))
            tiesCount++
            localStorage.setItem("Ties", tiesCount)
            updateScore()
        }
        else {
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='rock-emoji.png' class='move-icon'>"
            let loseCount = JSON.parse(localStorage.getItem("Losses"))
            loseCount++
            localStorage.setItem("Losses", loseCount)
            updateScore()
        }
    }
}