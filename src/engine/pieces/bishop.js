import Piece from "./piece";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);

        arrayOfAvailableMoves = arrayOfAvailableMoves.concat(checkDiagonal(1, 1, currentSquare, board));
        arrayOfAvailableMoves = arrayOfAvailableMoves.concat(checkDiagonal(1, -1, currentSquare, board));
        arrayOfAvailableMoves = arrayOfAvailableMoves.concat(checkDiagonal(-1, 1, currentSquare, board));
        arrayOfAvailableMoves = arrayOfAvailableMoves.concat(checkDiagonal(-1, -1, currentSquare, board));
        
        return arrayOfAvailableMoves;
    }

}
           
function makeDiagonalSquare (row, col) {
            let newSquare = Square.at(row, col);
            if (newSquare.row >= 0 && newSquare.row <= 7 && newSquare.col >= 0 && newSquare.col <= 7) {
                return newSquare;
}
}

function checkDiagonal (rowDelta, colDelta, currentSquare, board) {
    let array = [];
    for (let i = 1; i < 8; i++) {
    let newSquareUpRight = makeDiagonalSquare(currentSquare.row + (i * rowDelta), currentSquare.col + (i * colDelta))
    if (newSquareUpRight !== undefined) {
        if (board.isSquareEmpty(newSquareUpRight) === false) {
            break;
        }
        array.push(newSquareUpRight);
    }
    }
    return array;
}