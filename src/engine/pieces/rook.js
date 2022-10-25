import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);

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
