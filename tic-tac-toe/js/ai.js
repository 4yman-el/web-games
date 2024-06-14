import { Players } from "./constants.js";
import Game from './game.js';

const AI = {
    move() {
        const availableMoves = [];

        // Collect all available moves (empty cells)
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (Game.cells[x][y] === Players.EMPTY) {
                    availableMoves.push({ x, y });
                }
            }
        }

        // Pick a random move from available moves
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        if (randomMove) {
            Game.captureCell(randomMove.x, randomMove.y);
        }
    }
};

export default AI;