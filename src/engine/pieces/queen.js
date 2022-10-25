import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Queen extends Piece {
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

        
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let availableSquare = Square.at(i, currentSquare.col);
            if (
                availableSquare.row !== currentSquare.row ||
                availableSquare.col !== currentSquare.col
            ) {
                if (board.isSquareEmpty(availableSquare)) {
                arrayOfAvailableMoves.push(availableSquare);
                } else {
                    break;
                }
            }
        }
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let availableSquare2 = Square.at(currentSquare.row, i);
            if (
                availableSquare2.row !== currentSquare.row ||
                availableSquare2.col !== currentSquare.col
            ) {
                if (board.isSquareEmpty(availableSquare2)) {
                    arrayOfAvailableMoves.push(availableSquare2);
                    } else {
                        break;
                    }
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
