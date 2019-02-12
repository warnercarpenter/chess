const pieces = {
    black_pieces: [
        {
            piece_type: "pawn",
            name: "blackPawnOne",
            current_space: 8,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnTwo",
            current_space: 9,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnThree",
            current_space: 10,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnFour",
            current_space: 11,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnFive",
            current_space: 12,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnSix",
            current_space: 13,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnSeven",
            current_space: 14,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "blackPawnEight",
            current_space: 15,
            alive: true,
            color: "black",
            character: "♟",
            first_move: true,
        },
        {
            piece_type: "rook",
            name: "blackRookOne",
            current_space: 0,
            alive: true,
            color: "black",
            character: "♜",
        },
        {
            piece_type: "rook",
            name: "blackRookTwo",
            current_space: 7,
            alive: true,
            color: "black",
            character: "♜",
        },
        {
            piece_type: "knight",
            name: "blackKnightOne",
            current_space: 1,
            alive: true,
            color: "black",
            character: "♞",
        },
        {
            piece_type: "knight",
            name: "blackKnightTwo",
            current_space: 6,
            alive: true,
            color: "black",
            character: "♞",
        },
        {
            piece_type: "bishop",
            name: "blackBishopOne",
            current_space: 2,
            alive: true,
            color: "black",
            character: "♝",
        },
        {
            piece_type: "bishop",
            name: "blackBishopTwo",
            current_space: 5,
            alive: true,
            color: "black",
            character: "♝",
        },
        {
            piece_type: "queen",
            name: "blackQueen",
            current_space: 3,
            alive: true,
            color: "black",
            character: "♚",
        },
        {
            piece_type: "king",
            name: "blackKing",
            current_space: 4,
            alive: true,
            color: "black",
            character: "♛",
        }
    ],
    white_pieces: [
        {
            piece_type: "pawn",
            name: "whitePawnOne",
            current_space: 48,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnTwo",
            current_space: 49,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnThree",
            current_space: 50,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnFour",
            current_space: 51,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnFive",
            current_space: 52,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnSix",
            current_space: 53,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnSeven",
            current_space: 54,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "pawn",
            name: "whitePawnEight",
            current_space: 55,
            alive: true,
            color: "white",
            character: "♙",
            first_move: true,
        },
        {
            piece_type: "rook",
            name: "whiteRookOne",
            current_space: 56,
            alive: true,
            color: "white",
            character: "♖",
        },
        {
            piece_type: "rook",
            name: "whiteRookTwo",
            current_space: 63,
            alive: true,
            color: "white",
            character: "♖",
        },
        {
            piece_type: "knight",
            name: "whiteKnightOne",
            current_space: 57,
            alive: true,
            color: "white",
            character: "♘",
        },
        {
            piece_type: "knight",
            name: "whiteKnightTwo",
            current_space: 62,
            alive: true,
            color: "white",
            character: "♘",
        },
        {
            piece_type: "bishop",
            name: "whiteBishopOne",
            current_space: 35,
            alive: true,
            color: "white",
            character: "♗",
        },
        {
            piece_type: "bishop",
            name: "whiteBishopTwo",
            current_space: 61,
            alive: true,
            color: "white",
            character: "♗",
        },
        {
            piece_type: "queen",
            name: "whiteQueen",
            current_space: 59,
            alive: true,
            color: "white",
            character: "♔",
        },
        {
            piece_type: "king",
            name: "whiteKing",
            current_space: 60,
            alive: true,
            color: "white",
            character: "♕",
        }
    ]
}

const blackPiecesArray = ["♟", "♜", "♞", "♝", "♚", "♛"]
const whitePiecesArray = ["♙", "♖", "♘", "♗", "♔", "♕"]

const rows = [
    {
        name: "A",
        boxes: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
        name: "B",
        boxes: [8, 9, 10, 11, 12, 13, 14, 15]
    },
    {
        name: "C",
        boxes: [16, 17, 18, 19, 20, 21, 22, 23]
    },
    {
        name: "D",
        boxes: [24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        name: "E",
        boxes: [32, 33, 34, 35, 36, 37, 38, 39]
    },
    {
        name: "F",
        boxes: [40, 41, 42, 43, 44, 45, 46, 47]
    },
    {
        name: "G",
        boxes: [48, 49, 50, 51, 52, 53, 54, 55]
    },
    {
        name: "H",
        boxes: [56, 57, 58, 59, 60, 61, 62, 63]
    }
]

const columns = [
    {
        name: 1,
        boxes: [0, 8, 16, 24, 32, 40, 48, 56]
    },
    {
        name: 2,
        boxes: [1, 9, 17, 25, 33, 41, 49, 57]
    },
    {
        name: 3,
        boxes: [2, 10, 18, 26, 34, 42, 50, 58]
    },
    {
        name: 4,
        boxes: [3, 11, 19, 27, 35, 43, 51, 59]
    },
    {
        name: 5,
        boxes: [4, 12, 20, 28, 36, 44, 52, 60]
    },
    {
        name: 6,
        boxes: [5, 13, 21, 29, 37, 45, 53, 61]
    },
    {
        name: 7,
        boxes: [6, 14, 22, 30, 38, 46, 54, 62]
    },
    {
        name: 8,
        boxes: [7, 15, 23, 31, 39, 47, 55, 63]
    },
]

const diagonals = {
    diagonalOne: [
        [8, 1],
        [16, 9, 2],
        [24, 17, 10, 3],
        [32, 25, 18, 11, 4],
        [40, 33, 26, 19, 12, 5],
        [48, 41, 34, 27, 20, 13, 6],
        [56, 49, 42, 35, 28, 21, 14, 7],
        [57, 50, 43, 36, 29, 22, 15],
        [58, 51, 44, 37, 30, 23],
        [59, 52, 45, 38, 31],
        [60, 53, 46, 39],
        [61, 54, 47],
        [62, 55]
    ],
    diagonalTwo:[
        [15, 6],
        [23, 14, 5],
        [31, 22, 13, 4],
        [39, 30, 21, 12, 3],
        [47, 38, 29, 20, 11, 2],
        [55, 46, 37, 28, 19, 10, 1],
        [63, 54, 45, 36, 27, 18, 9, 0],
        [62, 53, 44, 35, 26, 17, 8],
        [61, 52, 43, 34, 25, 16],
        [60, 51, 42, 33, 24],
        [59, 50, 41, 32],
        [58, 49, 40],
        [57, 48]
    ]
}