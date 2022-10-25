import Piece from "./piece";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);
        
            for (let i = 1; i < 8; i++) {
                let newSquareUpRight = makeDiagonalSquare(currentSquare.row + i, currentSquare.col + i)
                if (newSquareUpRight !== undefined) {
                    if (board.isSquareEmpty(newSquareUpRight) === false) {
                        break;
                    }
                    arrayOfAvailableMoves.push(newSquareUpRight);
                }
                }
            for (let i = 1; i < 8; i++) {
                let newSquareUpLeft = makeDiagonalSquare(currentSquare.row + i, currentSquare.col - i)
                if (newSquareUpLeft !== undefined) {
                    if (board.isSquareEmpty(newSquareUpLeft) === false) {
                        break;
                    }
                    arrayOfAvailableMoves.push(newSquareUpLeft);
                }
            }
            for (let i = 1; i < 8; i++) {    
                let newSquareDownRight = makeDiagonalSquare(currentSquare.row - i, currentSquare.col + i)
                if (newSquareDownRight !== undefined) {
                    if (board.isSquareEmpty(newSquareDownRight) === false) {
                        break;
                    }
                    arrayOfAvailableMoves.push(newSquareDownRight);
                }
            }
            for (let i = 1; i < 8; i++) {
                let newSquareDownLeft = makeDiagonalSquare(currentSquare.row - i, currentSquare.col - i)
                if (newSquareDownLeft !== undefined) {
                    if (board.isSquareEmpty(newSquareDownLeft) === false) {
                        break;
                    }
                    arrayOfAvailableMoves.push(newSquareDownLeft);
                }
            }
        return arrayOfAvailableMoves;
    }

}
           
function makeDiagonalSquare (row, col) {
            let newSquare = Square.at(row, col);
            if (newSquare.row >= 0 && newSquare.row <= 7 && newSquare.col >= 0 && newSquare.col <= 7) {
                return newSquare;
}
}

