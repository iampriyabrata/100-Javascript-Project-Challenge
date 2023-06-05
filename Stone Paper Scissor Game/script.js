const stone = "✊";
const paper = "✋";
const scissor = "✌"
const choosingArray = [stone, paper, scissor]

const player1El = document.getElementById("player-you")
const player2El = document.getElementById("player-computer")

const startInterface = document.getElementById("start-interface")
const chooseInterface = document.getElementById("select-bet")
const showdownInterface = document.getElementById("showdown")

const startButton = document.getElementById("start-button")
const stoneEl = document.getElementById("stone")
const paperEl = document.getElementById("paper")
const scissorEl = document.getElementById("scissor")
const playAgainEl = document.getElementById("play-again")


const winEl = document.getElementById("win")
const looseEl = document.getElementById("loose")
const tieEl = document.getElementById("tie")

let you = "";
let computer = "";


startButton.addEventListener("click",()=>{
    startGame()
})

stoneEl.addEventListener("click",()=>{
    you = stone;
    showdown()
})
paperEl.addEventListener("click",()=>{
    you = paper;
    showdown()
})
scissorEl.addEventListener("click",()=>{
    you = scissor;
    showdown()
})

playAgainEl.addEventListener("click",()=>{
    playAgain()
})








function startGame(){
    startInterface.style.visibility = "hidden";
    chooseInterface.style.visibility = "visible"
}

function showdown() {
    computer = choosingArray[Math.floor(Math.random()*3)]
    chooseInterface.style.visibility = "hidden"
    showdownInterface.style.visibility = "visible"
    if(you === stone && computer === paper){
        winEl.style.display="none"
        looseEl.style.display="inline"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`computer wins`)
    }
    if(you === stone && computer === scissor){
        winEl.style.display="inline"
        looseEl.style.display="none"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`you wins`)
    }
    if(you === stone && computer === stone){
        winEl.style.display="none"
        looseEl.style.display="none"
        tieEl.style.display="inline"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`tie game`)
    }
    if(you === paper && computer === stone){
        winEl.style.display="inline"
        looseEl.style.display="none"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`you wins`)
    }
    if(you === paper && computer === paper){
        winEl.style.display="none"
        looseEl.style.display="none"
        tieEl.style.display="inline"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`tie game`)
    }
    if(you === paper && computer === scissor){
        winEl.style.display="none"
        looseEl.style.display="inline"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`computer wins`)
    }
    if(you === scissor && computer === stone){
        winEl.style.display="none"
        looseEl.style.display="inline"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`computer wins`)
    }
    if(you === scissor && computer === paper){
        winEl.style.display="inline"
        looseEl.style.display="none"
        tieEl.style.display="none"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`you wins`)
    }
    if(you === scissor && computer === scissor){
        winEl.style.display="none"
        looseEl.style.display="none"
        tieEl.style.display="inline"
        player1El.textContent = you
        player2El.textContent = computer
        console.log(`tie game`)
    }
}

function playAgain(){
    showdownInterface.style.visibility = "hidden"
    startGame()
}