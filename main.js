//Object to hold information of boxes
const boxes = [
    box0 = {},
    box1 = {},
    box2 = {},
    box3 = {},
    box4 = {},
    box5 = {},
    box6 = {},
    box7 = {},
    box8 = {},
]

//Setting references to HTML elements
let gameStatus = document.getElementById("gameStatus")
const board = document.getElementById("board")
const buttonLocation = document.getElementById("buttonLocation")
const message = document.getElementById(`message`)

//Creating replay button (will be sent to DOM after game concludes)
let refreshButton = document.createElement("button")
refreshButton.setAttribute("value", "Refresh Page")
refreshButton.setAttribute("onClick", "window.location.reload()")
refreshButton.innerHTML = "Play again!"

//Function to randomize who goes first
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//Initializing variables
let turn = getRandomInt(2)
let won = 0
let turnsTaken = 0

//Display initial turn message
initTurn = ["X's turn", "O's turn"]
gameStatus.innerHTML = initTurn[turn]

//Create box elements and set up function for making moods
for (let index = 0; index < 9; index++) {
    boxes[index].status = "empty"
    buttonBox = document.createElement("div")
    buttonBox.setAttribute("id", `box ${index}`)
    buttonBox.setAttribute("class", "emptyBox")
    buttonBox.addEventListener("click", function() {
        let currentBox =  document.getElementById(`box ${index}`)
        //Listen for clicks and change to corresponding class depending on player turn
        if (turn === 0 && won === 0 && currentBox.getAttribute("class") === "emptyBox") {
            currentBox.setAttribute("class", "xBox")
            boxes[index].status = "X"
            currentBox.innerHTML = "X"
            gameStatus.innerHTML = "O's turn"
            //Reset turn and increase turnsTaken by 1
            turn = 1
            turnsTaken++
            checkWin("X")
        } else if (turn === 1 && won === 0 && currentBox.getAttribute("class") === "emptyBox") {
            currentBox.setAttribute("class", "oBox")
            boxes[index].status = "O"
            currentBox.innerHTML = "O"
            gameStatus.innerHTML = "X's turn"
            //Reset turn and increase turnsTaken by 1
            turn = 0
            turnsTaken++
            checkWin("O")
        }
    },
    //Add box elements to DOM
    board.appendChild(buttonBox),
    //Set target in boxes object
    boxes[index].target = document.getElementById(`box ${index}`)
)}

function checkWin(letter) {
    if ((boxes[0].status === letter && boxes[1].status === letter && boxes[2].status === letter) ||
        (boxes[3].status === letter && boxes[4].status === letter && boxes[5].status === letter) ||
        (boxes[6].status === letter && boxes[7].status === letter && boxes[8].status === letter) ||
        (boxes[0].status === letter && boxes[4].status === letter && boxes[8].status === letter) ||
        (boxes[2].status === letter && boxes[4].status === letter && boxes[6].status === letter) ||
        (boxes[0].status === letter && boxes[3].status === letter && boxes[6].status === letter) ||
        (boxes[1].status === letter && boxes[4].status === letter && boxes[7].status === letter) ||
        (boxes[2].status === letter && boxes[5].status === letter && boxes[8].status === letter)) {
        message.innerHTML = `Win for ${letter}!`
        won = 1
        buttonLocation.appendChild(refreshButton)
        gameStatus.innerHTML = "Game over"
    } else if (turnsTaken === 9) {
        message.innerHTML = `Tie!`
        won = 1
        buttonLocation.appendChild(refreshButton)
        gameStatus.innerHTML = "Game over"
    }
}