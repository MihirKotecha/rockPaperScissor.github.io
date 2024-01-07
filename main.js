let rockEl = document.getElementById("rock-el")
let paperEl = document.getElementById("paper-el")
let scissorEl = document.getElementById("scissors-el")
let resultEl = document.getElementById("result-el")
let moveEl = document.getElementById("move-el")

rockEl.addEventListener("click", () => {
    runGame("Rock")
})

paperEl.addEventListener("click", () => {
    runGame("Paper")
})

scissorEl.addEventListener("click", () => {
    runGame("Scissor")
})


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
            // alert("You Win!!!")
        }
        else if (compMove === "Paper") {
            // alert("TIE!!!")
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='paper-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
        }
        else {
            // alert("You Lose!!!")
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='paper-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
        }
    }

    else if (move === "Rock") {
        if (compMove === "Rock") {
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='rock-emoji.png' class='move-icon'>"
        }
        else if (compMove === "Paper") {
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
        }
        else {
            resultEl.innerText = "You Win!!!"
            moveEl.innerHTML = "Your Move: <img src='rock-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
        }
    }

    else {
        if (compMove === "Paper") {
            resultEl.innerText = "You Win!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='paper-emoji.png' class='move-icon'>"
        }
        else if (compMove === "Scissors") {
            resultEl.innerText = "TIE!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='scissors-emoji.png' class='move-icon'>"
        }
        else {
            resultEl.innerText = "You Lose!!!"
            moveEl.innerHTML = "Your Move: <img src='scissors-emoji.png' class='move-icon'>, Computer Move: <img src='rock-emoji.png' class='move-icon'>"
        }
    }
}