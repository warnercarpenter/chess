//Setting references to HTML elements
let gameStatus = document.getElementById("gameStatus")
const board = document.getElementById("board")
const buttonLocation = document.getElementById("buttonLocation")
const message = document.getElementById(`message`)
const capturedForWhite = document.getElementById("capturedForWhite")
const capturedForBlack = document.getElementById("capturedForBlack")

//Creating replay button (will be sent to DOM after game concludes)
let refreshButton = document.createElement("button")
refreshButton.setAttribute("value", "Refresh Page")
refreshButton.setAttribute("onClick", "window.location.reload()")
refreshButton.innerHTML = "Play again!"


//Initializing variables
let turn = 0
let won = 0
let turnsTaken = 0

//Display initial turn message
initTurn = ["Black's turn", "White's turn"]

//Create box elements and set up function for making moves
const makeBoxes = () => {
    board.innerHTML = ""
    let row = 0
    let counter = 0
    for (let index = 0; index < 64; index++) {
        buttonBox = document.createElement("div")
        buttonBox.setAttribute("id", `box ${index}`)
        if (row === 0) {
            if (index === 0 || index % 2 === 0) {
                buttonBox.setAttribute("class", "whiteBox")
            }
            if (index === 1 || index % 2 === 1) {
                buttonBox.setAttribute("class", "blackBox")
            }
            counter++
        }
        if (row === 1) {
            if (index === 0 || index % 2 === 0) {
                buttonBox.setAttribute("class", "blackBox")
            }
            if (index === 1 || index % 2 === 1) {
                buttonBox.setAttribute("class", "whiteBox")
            }
            counter++
        }
        board.appendChild(buttonBox)

        if (counter === 8 && row === 0) {
            row = 1
            counter = 0
        }
        if (counter === 8 && row === 1) {
            row = 0
            counter = 0
        }
    }
}

const renderBoard = () => {
    gameStatus.innerHTML = initTurn[turn]

    for (let i = 0; i < 64; i++) {
        document.getElementById(`box ${i}`).innerHTML = ""
    }
    pieces.black_pieces.forEach(function(piece) {
        if (piece.alive === true) {
            box = document.getElementById(`box ${piece.current_space}`)
            box.classList.add("darkText")
            box.innerHTML = piece.character
        }
    })
    pieces.white_pieces.forEach(function(piece) {
        if (piece.alive === true) {
            box = document.getElementById(`box ${piece.current_space}`)
            box.innerHTML = piece.character
        }
    })
}

const makeInitListener = () => {
    board.addEventListener("click", initListenerFunction)
}

const initListenerFunction = () => {
    if (turn === 1 && pieces.white_pieces.some(a => a.character === event.target.innerHTML)) {
        getAvailableMoves("white", event.target)
    }
    if (turn === 0 && pieces.black_pieces.some(a => a.character === event.target.innerHTML)) {
        getAvailableMoves("black", event.target)
    }
}

const initGame = () => {
    makeBoxes()
    renderBoard()
    makeInitListener()
}

initGame()





























// board.addEventListener("click", function () {
//     if (won === 1) return;
//     let currentBoxID = event.target.id.split(" ")[1]
//     let columnToGoIn = columns.find(a => a.includes(parseInt(currentBoxID)))
//     if (columnToGoIn === undefined) return;
//     let boxToGoIn = document.getElementById(`box ${columnToGoIn[columnToGoIn.length - 1]}`)
//     let boxToGoInID = boxToGoIn.id.split(" ")[1]
//     movesMade.push(boxToGoInID)
//     //Listen for clicks and change to corresponding class depending on player turn
//     if (turn === 0) {
//         boxToGoIn.setAttribute("class", "redBox")
//         boxes[boxToGoInID].status = "R"
//         columnToGoIn.pop()
//         gameStatus.innerHTML = "Yellow's turn"
//         //Reset turn and increase turnsTaken by 1
//         turn = 1
//         turnsTaken++
//         if (turnsTaken > 6) { checkWin("R") }
//     } else if (turn === 1) {
//         boxToGoIn.setAttribute("class", "yellowBox")
//         boxes[boxToGoInID].status = "Y"
//         columnToGoIn.pop()
//         gameStatus.innerHTML = "Red's turn"
//         //Reset turn and increase turnsTaken by 1
//         turn = 0
//         turnsTaken++
//         if (turnsTaken > 6) { checkWin("Y") }
//     }
// })
