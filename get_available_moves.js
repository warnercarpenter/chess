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


const whiteRookAvailableMoves = (rook) => {
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

    const lowOpacity = (availableMovesForward, availableCaptures, currentSpace) => {
        const availableMoves = availableMovesForward.concat(availableCaptures)
            for (let i = 0; i < 64; i++) {
                if (availableMoves.includes(i) === false && i != currentSpace) {
                    document.getElementById(`box ${i}`).classList.add("lowOpacity")
                }
            }
    }

    const checkBackwardCapture = () => {
        const spaceToCheck = currentDiagonalOne.slice(currentDiagonalOne.indexOf(startingLocation) + 1, currentDiagonalOne.indexOf(startingLocation) + 2)[0]
        if (opposingColorArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    const checkDiagonalTwoCapture = () => {
        const spaceToCheck = currentDiagonalTwo.slice(currentDiagonalTwo.indexOf(startingLocation) + 1, currentDiagonalTwo.indexOf(startingLocation) + 2)[0]
        if (opposingColorArray.includes(document.getElementById(`box ${spaceToCheck}`).innerHTML)) {
            availableCaptures.push(spaceToCheck)
        }
    }

    if (currentRow.name != "H") {
        checkBackwardCapture()
    }
    
    if (currentRow.name != "A") {
        checkForwardCapture()
    }

    if (currentColumn.name != 8) {
        checkRightCapture()
    }

    if (currentColumn.name != 1) {
        checkLeftCapture()
    }

    if (rook.first_move === true) {
        availableMovesForward = movesForward.slice(0, 2)
        if (document.getElementById(`box ${availableMovesForward[1]}`).innerHTML != "") {
            availableMovesForward = [availableMovesForward[0]]
        }
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, rook.current_space)
            movePiece(rook, availableMovesForward, availableCaptures, opposingColor)
        }
    }
    if (rook.first_move === false) {
        availableMovesForward = movesForward.slice(0, 1)
        if (document.getElementById(`box ${availableMovesForward[0]}`).innerHTML != "") {
            availableMovesForward = []
        }
        if (availableMovesForward.length != 0 || availableCaptures.length != 0) {
            lowOpacity(availableMovesForward, availableCaptures, rook.current_space)
            movePiece(rook, availableMovesForward, availableCaptures, opposingColor)
        }
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
        if (pieceToCheck.color === "white") {
            whiteRookAvailableMoves(pieceToCheck)
        }
        if (pieceToCheck.color === "black") {
            blackRookAvailableMoves(pieceToCheck)
        }
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