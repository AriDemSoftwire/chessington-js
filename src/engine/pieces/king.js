import Piece from "./piece";
import Square from "../square";
import GameSettings from "../gameSettings";

export default class King extends Piece {
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
                    currentSquare.row !== availableSquare.row ||
                    currentSquare.col !== availableSquare.col
                ) {
                    if (
                        Math.abs(currentSquare.row - availableSquare.row) <= 1
                    ) {
                        if (
                            Math.abs(currentSquare.col - availableSquare.col) <= 1
                        ) {
                            arrayOfAvailableMoves.push(availableSquare);
                        }
                    }
                }
            }
        }
        return arrayOfAvailableMoves;
    }
}
