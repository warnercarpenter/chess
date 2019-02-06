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
    box9 = {},
    box10 = {},
    box11 = {},
    box12 = {},
    box13 = {},
    box14 = {},
    box15 = {},
    box16 = {},
    box17 = {},
    box18 = {},
    box19 = {},
    box20 = {},
    box21 = {},
    box22 = {},
    box23 = {},
    box24 = {},
    box25 = {},
    box26 = {},
    box27 = {},
    box28 = {},
    box29 = {},
    box30 = {},
    box31 = {},
    box32 = {},
    box33 = {},
    box34 = {},
    box35 = {},
    box36 = {},
    box37 = {},
    box38 = {},
    box39 = {},
    box40 = {},
    box41 = {}
]

columns = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29, 36],
    [2, 9, 16, 23, 30, 37],
    [3, 10, 17, 24, 31, 38],
    [4, 11, 18, 25, 32, 39],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41]
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
initTurn = ["Red's turn", "Yellow's turn"]
gameStatus.innerHTML = initTurn[turn]

//Create box elements and set up function for making moves
for (let index = 0; index < 42; index++) {
    boxes[index].status = "empty"
    buttonBox = document.createElement("div")
    buttonBox.setAttribute("id", `box ${index}`)
    buttonBox.setAttribute("class", "emptyBox")
    //Add box elements to DOM
    board.appendChild(buttonBox),
    //Set target in boxes object
    boxes[index].target = document.getElementById(`box ${index}`)
}

board.addEventListener("click", function() {
    if (won === 1) return;
    let currentBoxID = event.target.id.split(" ")[1]
    let columnToGoIn = columns.find(a => a.includes(parseInt(currentBoxID)))
    if (columnToGoIn === undefined) return;
    let boxToGoIn = document.getElementById(`box ${columnToGoIn[columnToGoIn.length - 1]}`)
    let boxToGoInID = boxToGoIn.id.split(" ")[1]
    //Listen for clicks and change to corresponding class depending on player turn
    if (turn === 0) {
        boxToGoIn.setAttribute("class", "redBox")
        boxes[boxToGoInID].status = "R"
        columnToGoIn.pop()
        gameStatus.innerHTML = "Yellow's turn"
        //Reset turn and increase turnsTaken by 1
        turn = 1
        turnsTaken++
        if (turnsTaken > 6) {checkWin("R")}
    } else if (turn === 1) {
        boxToGoIn.setAttribute("class", "yellowBox")
        boxes[boxToGoInID].status = "Y"
        columnToGoIn.pop()
        gameStatus.innerHTML = "Red's turn"
        //Reset turn and increase turnsTaken by 1
        turn = 0
        turnsTaken++
        if (turnsTaken > 6) {checkWin("Y")}
    }
})