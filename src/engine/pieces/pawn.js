import Piece from "./piece";
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.firstTurn = true;
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);

        if (this.player === Player.WHITE) {
            let availableSquare = Square.at(
                currentSquare.row + 1,
                currentSquare.col
            );
            if (this.firstTurn === false) {
                arrayOfAvailableMoves.push(availableSquare);
            } else {
                let availableSquare2 = Square.at(
                    currentSquare.row + 2,
                    currentSquare.col
                );
                arrayOfAvailableMoves.push(availableSquare, availableSquare2);
            }
        } else {
            let availableSquare = Square.at(
                currentSquare.row - 1,
                currentSquare.col
            );
            if (this.firstTurn === false) {
                arrayOfAvailableMoves.push(availableSquare);
            } else {
                let availableSquare2 = Square.at(
                    currentSquare.row - 2,
                    currentSquare.col
                );
                arrayOfAvailableMoves.push(availableSquare, availableSquare2);
            }
        }
        return arrayOfAvailableMoves;
    }
}
