const capturePiece = (currentPiece, move, opposingColor) => {
    const capturedPiece = document.createElement("span")
    capturedPiece.classList.add("listP")
    capturedPiece.innerHTML = pieces[`${opposingColor}_pieces`].find(a => a.current_space === move).character
    if (currentPiece.color === "white") {
        capturedForWhite.appendChild(capturedPiece)
    }
    if (currentPiece.color === "black") {
        capturedForBlack.appendChild(capturedPiece)
    }
    pieces[`${opposingColor}_pieces`].find(a => a.current_space === move).alive = false
    pieces[`${opposingColor}_pieces`].find(a => a.current_space === move).current_space = ""
}

const movePiece = (piece, availableMovesForward, availableCaptures, opposingColor) => {
    const pieceInnerFunction = () => {
        if (availableMovesForward.includes(parseInt(event.target.id.split(" ")[1])) || availableCaptures.includes(parseInt(event.target.id.split(" ")[1]))) {
            const move = parseInt(event.target.id.split(" ")[1])
            piece.current_space = move
            if (availableCaptures.includes(move)) {
                capturePiece(piece, move, opposingColor)
            }
            if (piece.piece_type === "pawn") {
                piece.first_move = false
            }

            if (turn === 0) {
                turn = 1
            } else {
                turn = 0
            }
            
            renderBoard()
            board.removeEventListener("click", pieceInnerFunction)
            initGame()
        }
    }

    board.removeEventListener("click", initListenerFunction)
    board.addEventListener("click", pieceInnerFunction)
}