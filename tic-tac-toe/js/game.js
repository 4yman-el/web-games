import { DOM, Players, GameModes } from './constants.js';
import AI from './ai.js';

const Game = {
    cells: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    turn: Players.X,
    difficulty: GameModes.TWO_PLAYERS,

    getName(turn) {
        if (turn === Players.X) return 'Player (X)';
        
        if (Game.difficulty === GameModes.TWO_PLAYERS) {
            return 'Opponent (O)';
        } else {
            return 'Computer (O)';
        }
    },

    startGame(mode) {
        DOM.hideModals();
        Game.turn = Players.X;
        Game.difficulty = mode;
        Game.cells = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        Game.updateBoard();
        if (Game.difficulty === GameModes.NORMAL && Game.turn === Players.O) {
            AI.move();
        }
    },

    resetGame (){
        Game.cells = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        Game.updateBoard();
    },

    updateBoard() {
        Game.cells.forEach((list, i) => {
            list.forEach((cell, j) => {
                const elem = DOM.cells[i * 3 + j];
                switch (cell) {
                    case Players.X:
                        elem.classList.add("x");
                        break;
                    case Players.O:
                        elem.classList.add("o");
                        break;
                    default:
                        elem.classList.remove("x");
                        elem.classList.remove("o");
                        break;
                }
            });
        });
    },

    captureCell(x, y) {
        if (Game.cells[x][y] !== Players.EMPTY) {
            return;
        }
        Game.cells[x][y] = Game.turn;
        if (Game.checkResults()) {
            return;
        }
        Game.swapTurn();
        if (Game.difficulty === GameModes.NORMAL && Game.turn === Players.O) {
            AI.move();
        }
        Game.updateBoard();
    },

    checkResults() {
        const lines = [
            // Horizontal
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Vertical
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonal
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (Game.cells[a[0]][a[1]] !== Players.EMPTY &&
                Game.cells[a[0]][a[1]] === Game.cells[b[0]][b[1]] &&
                Game.cells[a[0]][a[1]] === Game.cells[c[0]][c[1]]) {
                Game.endGame(Game.turn, false);
                return true;
            }
        }

        const isTie = Game.cells.flat().every(cell => cell !== Players.EMPTY);
        if (isTie) {
            Game.endGame(null, true);
            return true;
        }

        return false;
    },

    swapTurn() {
        Game.turn = (Game.turn === Players.X) ? Players.O : Players.X;
        DOM.board.classList.remove(Game.turn === Players.X ? "o" : "x");
        DOM.board.classList.add(Game.turn === Players.X ? "x" : "o");
        DOM.turn.innerText = `Turn: ${Game.getName(Game.turn)}`;
    },

    endGame(winner, tie) {
        if (tie) {
            DOM.playerWins.innerText = "It's a tie!";
        } else {
            DOM.playerWins.innerText = `${Game.getName(winner)} Wins!`;
        }
        Game.resetGame();
        DOM.board.classList.remove(Game.turn === Players.X ? "x" : "o");
        DOM.swapModals();
        DOM.showModals();
    }
};

export default Game;