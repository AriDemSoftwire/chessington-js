import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let arrayOfAvailableMoves = new Array(0);
        const currentSquare = board.findPiece(this);

        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) {
            for (let j = 0; j < GameSettings.BOARD_SIZE; j++) {
                let availableSquare = Square.at(i, j); 
            if (Math.abs(currentSquare.row - availableSquare.row) === 2) {
                if (Math.abs(currentSquare.col - availableSquare.col) === 1) {
                    arrayOfAvailableMoves.push(availableSquare);
                }
            }
            if (Math.abs(currentSquare.col - availableSquare.col) === 2) {
                if (Math.abs(currentSquare.row - availableSquare.row) === 1) {
                    arrayOfAvailableMoves.push(availableSquare);
                }
            }
            }
        }
        return arrayOfAvailableMoves;
    }

}
