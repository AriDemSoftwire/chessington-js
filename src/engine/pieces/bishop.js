import Piece from "./piece";
import GameSettings from "../gameSettings";
import Square from "../square";

export default class Bishop extends Piece {
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
        return arrayOfAvailableMoves;
    }
}
