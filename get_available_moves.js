//hello

const whitePawnAvailableMoves = (pawn) => {
    const opposingColor = "black"
    let availableCaptures = []
    const startingLocation = pawn.current_space
    const currentColumn = columns.find(a => a.boxes.includes(startingLocation))
    const currentColumnArray = currentColumn.boxes.slice(0)
    const movesForward = currentColumnArray.reverse().slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const currentDiagonalOne = diagonals.diagonalOne.find(a => a.includes(startingLocation)).slice(0)
    const currentDiagonalTwo = diagonals.diagonalTwo.find(a => a.includes(startingLocation)).slice(0)

    const lowOpacity = (availableMovesForward, availableCaptures, currentSpace) => {
        const availableMoves = availableMovesForward.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const checkDiagonalOneCapture = () => {
        const spaceToCheck = currentDiagonalOne.slice(currentDiagonalOne.indexOf(startingLocation) + 1, currentDiagonalOne.indexOf(startingLocation) + 2)[0]
        if (blackPiecesArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    const checkDiagonalTwoCapture = () => {
        const spaceToCheck = currentDiagonalTwo.slice(currentDiagonalTwo.indexOf(startingLocation) + 1, currentDiagonalTwo.indexOf(startingLocation) + 2)[0]
        if (blackPiecesArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    if (currentColumn.name != 8) {
        checkDiagonalOneCapture()
    }

    if (currentColumn.name != 1) {
        checkDiagonalTwoCapture()
    }

    if (pawn.first_move === true) {
        availableMovesForward = movesForward.slice(0, 2)
        if (document.getElementById(`box ${availableMovesForward[1]}`).innerHTML != "") {
            availableMovesForward = [availableMovesForward[0]]
        }
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, pawn.current_space)
            movePiece(pawn, availableMovesForward, availableCaptures, opposingColor)
        }
    }
    if (pawn.first_move === false) {
        availableMovesForward = movesForward.slice(0, 1)
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, pawn.current_space)
            movePiece(pawn, availableMovesForward, availableCaptures, opposingColor)
        }
    }
}

const blackPawnAvailableMoves = (pawn) => {
    const opposingColor = "white"
    let availableCaptures = []
    const startingLocation = pawn.current_space
    const currentColumn = columns.find(a => a.boxes.includes(startingLocation))
    const currentColumnArray = currentColumn.boxes.slice(0)
    const movesForward = currentColumnArray.slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const currentDiagonalOne = diagonals.diagonalOne.find(a => a.includes(startingLocation)).slice(0).reverse()
    const currentDiagonalTwo = diagonals.diagonalTwo.find(a => a.includes(startingLocation)).slice(0).reverse()

    const lowOpacity = (availableMovesForward, availableCaptures, currentSpace) => {
        const availableMoves = availableMovesForward.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const checkDiagonalOneCapture = () => {
        const spaceToCheck = currentDiagonalOne.slice(currentDiagonalOne.indexOf(startingLocation) + 1, currentDiagonalOne.indexOf(startingLocation) + 2)[0]
        if (whitePiecesArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    const checkDiagonalTwoCapture = () => {
        const spaceToCheck = currentDiagonalTwo.slice(currentDiagonalTwo.indexOf(startingLocation) + 1, currentDiagonalTwo.indexOf(startingLocation) + 2)[0]
        if (whitePiecesArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    if (currentColumn.name != 1) {
        checkDiagonalOneCapture()
    }

    if (currentColumn.name != 8) {
        checkDiagonalTwoCapture()
    }

    if (pawn.first_move === true) {
        availableMovesForward = movesForward.slice(0, 2)
        if (document.getElementById(`box ${availableMovesForward[1]}`).innerHTML != "") {
            availableMovesForward = [availableMovesForward[0]]
        }
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, pawn.current_space)
            movePiece(pawn, availableMovesForward, availableCaptures, opposingColor)
        }
    }
    if (pawn.first_move === false) {
        availableMovesForward = movesForward.slice(0, 1)
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, pawn.current_space)
            movePiece(pawn, availableMovesForward, availableCaptures, opposingColor)
        }
    }
}

const rookAvailableMoves = (rook) => {
    let opposingColor = ""
    let opposingColorArray = []
    if (rook.color === "white") {
        opposingColor = "black"
        opposingColorArray = blackPiecesArray
    }
    if (rook.color === "black") {
        opposingColor = "white"
        opposingColorArray = whitePiecesArray
    }
    let availableCaptures = []
    const startingLocation = rook.current_space
    const currentColumn = columns.find(a => a.boxes.includes(startingLocation))
    const currentColumnArray = currentColumn.boxes.slice(0)
    const currentRow = rows.find(a => a.boxes.includes(startingLocation))
    const currentRowArray = currentRow.boxes.slice(0)
    const movesBackward = currentColumnArray.slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const movesForward = currentColumnArray.reverse().slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const movesRight = currentRowArray.slice((currentRowArray.indexOf(startingLocation)) + 1)
    const movesLeft = currentRowArray.reverse().slice((currentRowArray.indexOf(startingLocation)) + 1)
    let availableMoves = []

    const lowOpacity = (availableMoves, availableCaptures, currentSpace) => {
        const availableMoves = availableMoves.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const getAvailableMoves = (direction) => {
        let thingToCheck = ""
        if (direction === "backward") {
            thingToCheck = movesBackward
        }
        if (direction === "forward") {
            thingToCheck = movesForward
        }
        if (direction === "right") {
            thingToCheck = movesRight
        }
        if (direction === "left") {
            thingToCheck = movesLeft
        }
        if (direction === "diagonalOne") {
            thingToCheck = movesDiagonalOne
        }
        if (direction === "diagonalTwo") {
            thingToCheck = movesDiagonalTwo
        }
        if (direction === "diagonalThree") {
            thingToCheck = movesDiagonalThree
        }
        if (direction === "diagonalFour") {
            thingToCheck = movesDiagonalFour
        }
   
        for (let index = 0; index < thingToCheck.length; index++) {
            const currentSpace = thingToCheck[index];
            if (document.getElementById(`box ${currentSpace}`).innerHTML === "") {
                availableMoves.push(currentSpace)
            }
            if (document.getElementById(`box ${currentSpace}`).innerHTML != "") {
                if (opposingColorArray.includes(document.getElementById(`box ${currentSpace}`).innerHTML)) {
                    availableCaptures.push(currentSpace)
                }
                break
            }
        }
    }

    if (currentRow.name != "H") {
        getAvailableMoves("backward")
    }

    if (currentRow.name != "A") {
        getAvailableMoves("forward")
    }

    if (currentColumn.name != 8) {
        getAvailableMoves("right")
    }

    if (currentColumn.name != 1) {
        getAvailableMoves("left")
    }

    if (availableMoves.length != 0 || availableCaptures.length != 0) {
        lowOpacity(availableMoves, availableCaptures, rook.current_space)
        movePiece(rook, availableMoves, availableCaptures, opposingColor)
    }
}

const bishopAvailableMoves = (bishop) => {
    let opposingColor = ""
    let opposingColorArray = []
    if (bishop.color === "white") {
        opposingColor = "black"
        opposingColorArray = blackPiecesArray
    }
    if (bishop.color === "black") {
        opposingColor = "white"
        opposingColorArray = whitePiecesArray
    }
    let availableCaptures = []
    const startingLocation = bishop.current_space
    const currentColumn = columns.find(a => a.boxes.includes(startingLocation))
    const currentRow = rows.find(a => a.boxes.includes(startingLocation))
    const currentDiagonalOne = diagonals.diagonalOne.find(a => a.includes(startingLocation))
    const currentDiagonalOneArray = currentDiagonalOne.slice(0)
    const currentDiagonalTwo = diagonals.diagonalTwo.find(a => a.includes(startingLocation))
    const currentDiagonalTwoArray = currentDiagonalTwo.slice(0)
    const movesDiagonalOne = currentDiagonalOneArray.slice((currentDiagonalOneArray.indexOf(startingLocation)) + 1)
    const movesDiagonalTwo = currentDiagonalTwoArray.slice((currentDiagonalTwoArray.indexOf(startingLocation)) + 1)
    const movesDiagonalThree = currentDiagonalOneArray.reverse().slice((currentDiagonalOneArray.indexOf(startingLocation)) + 1)
    const movesDiagonalFour = currentDiagonalTwoArray.reverse().slice((currentDiagonalTwoArray.indexOf(startingLocation)) + 1)
    let availableMoves = []

    const lowOpacity = (availableMoves, availableCaptures, currentSpace) => {
        const availableMoves = availableMoves.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const getAvailableMoves = (direction) => {
        let thingToCheck = ""
        if (direction === "diagonalOne") {
            thingToCheck = movesDiagonalOne
        }
        if (direction === "diagonalTwo") {
            thingToCheck = movesDiagonalTwo
        }
        if (direction === "diagonalThree") {
            thingToCheck = movesDiagonalThree
        }
        if (direction === "diagonalFour") {
            thingToCheck = movesDiagonalFour
        }
   
        for (let index = 0; index < thingToCheck.length; index++) {
            const currentSpace = thingToCheck[index];
            if (document.getElementById(`box ${currentSpace}`).innerHTML === "") {
                availableMoves.push(currentSpace)
            }
            if (document.getElementById(`box ${currentSpace}`).innerHTML != "") {
                if (opposingColorArray.includes(document.getElementById(`box ${currentSpace}`).innerHTML)) {
                    availableCaptures.push(currentSpace)
                }
                break
            }
        }
    }

    if (currentColumn.name != 8 || currentRow.name != "A") {
        getAvailableMoves("diagonalOne")
    }

    if (currentColumn.name != 1 || currentRow.name != "A") {
        getAvailableMoves("diagonalTwo")
    }

    if (currentColumn.name != 1 || currentRow.name != "H") {
        getAvailableMoves("diagonalThree")
    }

    if (currentColumn.name != 8 || currentRow.name != "H") {
        getAvailableMoves("diagonalFour")
    }


    if (availableMoves.length != 0 || availableCaptures.length != 0) {
        lowOpacity(availableMoves, availableCaptures, bishop.current_space)
        movePiece(bishop, availableMoves, availableCaptures, opposingColor)
    }
}

const queenAvailableMoves = (queen) => {
    let opposingColor = ""
    let opposingColorArray = []
    if (queen.color === "white") {
        opposingColor = "black"
        opposingColorArray = blackPiecesArray
    }
    if (queen.color === "black") {
        opposingColor = "white"
        opposingColorArray = whitePiecesArray
    }
    let availableCaptures = []
    const startingLocation = queen.current_space
    const currentColumn = columns.find(a => a.boxes.includes(startingLocation))
    const currentColumnArray = currentColumn.boxes.slice(0)
    const currentRow = rows.find(a => a.boxes.includes(startingLocation))
    const currentRowArray = currentRow.boxes.slice(0)
    const currentDiagonalOne = diagonals.diagonalOne.find(a => a.includes(startingLocation))
    const currentDiagonalOneArray = currentDiagonalOne.slice(0)
    const currentDiagonalTwo = diagonals.diagonalTwo.find(a => a.includes(startingLocation))
    const currentDiagonalTwoArray = currentDiagonalTwo.slice(0)
    const movesBackward = currentColumnArray.slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const movesForward = currentColumnArray.reverse().slice((currentColumnArray.indexOf(startingLocation)) + 1)
    const movesRight = currentRowArray.slice((currentRowArray.indexOf(startingLocation)) + 1)
    const movesLeft = currentRowArray.reverse().slice((currentRowArray.indexOf(startingLocation)) + 1)
    const movesDiagonalOne = currentDiagonalOneArray.slice((currentDiagonalOneArray.indexOf(startingLocation)) + 1)
    const movesDiagonalTwo = currentDiagonalTwoArray.slice((currentDiagonalTwoArray.indexOf(startingLocation)) + 1)
    const movesDiagonalThree = currentDiagonalOneArray.reverse().slice((currentDiagonalOneArray.indexOf(startingLocation)) + 1)
    const movesDiagonalFour = currentDiagonalTwoArray.reverse().slice((currentDiagonalTwoArray.indexOf(startingLocation)) + 1)
    let availableMoves = []

    const lowOpacity = (availableMoves, availableCaptures, currentSpace) => {
        const availableMoves = availableMoves.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const getAvailableMoves = (direction) => {
        let thingToCheck = ""
        if (direction === "backward") {
            thingToCheck = movesBackward
        }
        if (direction === "forward") {
            thingToCheck = movesForward
        }
        if (direction === "right") {
            thingToCheck = movesRight
        }
        if (direction === "left") {
            thingToCheck = movesLeft
        }
        if (direction === "diagonalOne") {
            thingToCheck = movesDiagonalOne
        }
        if (direction === "diagonalTwo") {
            thingToCheck = movesDiagonalTwo
        }
        if (direction === "diagonalThree") {
            thingToCheck = movesDiagonalThree
        }
        if (direction === "diagonalFour") {
            thingToCheck = movesDiagonalFour
        }
   
        for (let index = 0; index < thingToCheck.length; index++) {
            const currentSpace = thingToCheck[index];
            if (document.getElementById(`box ${currentSpace}`).innerHTML === "") {
                availableMoves.push(currentSpace)
            }
            if (document.getElementById(`box ${currentSpace}`).innerHTML != "") {
                if (opposingColorArray.includes(document.getElementById(`box ${currentSpace}`).innerHTML)) {
                    availableCaptures.push(currentSpace)
                }
                break
            }
        }
    }

    if (currentRow.name != "H") {
        getAvailableMoves("backward")
    }

    if (currentRow.name != "A") {
        getAvailableMoves("forward")
    }

    if (currentColumn.name != 8) {
        getAvailableMoves("right")
    }

    if (currentColumn.name != 1) {
        getAvailableMoves("left")
    }

    if (currentColumn.name != 8 || currentRow.name != "A") {
        getAvailableMoves("diagonalOne")
    }

    if (currentColumn.name != 1 || currentRow.name != "A") {
        getAvailableMoves("diagonalTwo")
    }

    if (currentColumn.name != 1 || currentRow.name != "H") {
        getAvailableMoves("diagonalThree")
    }

    if (currentColumn.name != 8 || currentRow.name != "H") {
        getAvailableMoves("diagonalFour")
    }


    if (availableMoves.length != 0 || availableCaptures.length != 0) {
        lowOpacity(availableMoves, availableCaptures, queen.current_space)
        movePiece(queen, availableMoves, availableCaptures, opposingColor)
    }
}

const getAvailableMoves = (color, boxClicked) => {
    const boxID = parseInt(boxClicked.id.split(" ")[1])
    const pieceToCheck = pieces[`${color}_pieces`].find(a => a.current_space === boxID)
    if (pieceToCheck.piece_type === "pawn") {
        if (pieceToCheck.color === "white") {
            whitePawnAvailableMoves(pieceToCheck)
        }
        if (pieceToCheck.color === "black") {
            blackPawnAvailableMoves(pieceToCheck)
        }
    }
    if (pieceToCheck.piece_type === "rook") {
        rookAvailableMoves(pieceToCheck)
    }
    if (pieceToCheck.piece_type === "knight") {
        knightAvailableMoves(pieceToCheck)
    }
    if (pieceToCheck.piece_type === "bishop") {
        bishopAvailableMoves(pieceToCheck)
    }
    if (pieceToCheck.piece_type === "queen") {
        queenAvailableMoves(pieceToCheck)
    }
    if (pieceToCheck.piece_type === "king") {
        kingAvailableMoves(pieceToCheck)
    }
}