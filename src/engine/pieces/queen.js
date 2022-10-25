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

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j = 0; j < GameSettings.BOARD_SIZE; j++) {
                let availableSquare = Square.at(i, j);
                if (
                    Math.abs(currentSquare.row - availableSquare.row) ===
                    Math.abs(currentSquare.col - availableSquare.col)
                ) {
                    if (
                        currentSquare.row !== availableSquare.row &&
                        currentSquare.col !== availableSquare.col
                    ) {
                        arrayOfAvailableMoves.push(availableSquare);
                    }
                }
            }
        }

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            let availableSquare = Square.at(i, currentSquare.col);
            if (
                availableSquare.row !== currentSquare.row ||
                availableSquare.col !== currentSquare.col
            ) {
                arrayOfAvailableMoves.push(availableSquare);
            }

            let availableSquare2 = Square.at(currentSquare.row, i);
            if (
                availableSquare2.row !== currentSquare.row ||
                availableSquare2.col !== currentSquare.col
            ) {
                arrayOfAvailableMoves.push(availableSquare2);
            }
        }
        return arrayOfAvailableMoves;
    }
}
