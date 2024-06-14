const DOM = {
    overlay: $q('.overlay'),
    modeModal: $('mode-modal'),
    startNorm: $('start-normal'),
    start2player: $('start-2player'),
    winModal: $('win-modal'),
    playerWins: $('player-wins'),
    restart: $('restart'),
    turn: $('game-turn'),
    board: $('game-board'),
    cells: $qa('.cell')
};

const EMPTY = 0;
const X = 1;
const O = 2;

const NORMAL = 0;
const TWO_PLAYERS = 1;

const Game = {
    cells: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    turn: X,
    difficulty: TWO_PLAYERS,

    getName(turn) {
        if (turn === X) return 'Player (X)';
        
        if (Game.difficulty === TWO_PLAYERS) {
            return 'Opponent (O)';
        } else {
            return 'Computer (O)';
        }
    },

    swapModals() {
        DOM.modeModal.classList.toggle('hidden');
        DOM.winModal.classList.toggle('hidden');
    },

    hideModals() {
        DOM.overlay.classList.add('hidden');
    },

    showModals() {
        DOM.overlay.classList.remove('hidden');
    },

    startGame(mode) {
        Game.hideModals();
        Game.turn = X;
        Game.difficulty = mode;
        Game.cells = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        Game.updateBoard();
        if (Game.difficulty !== TWO_PLAYERS && Game.turn === O) {
            Game.aiMove();
        }
    },

    updateBoard() {
        Game.cells.forEach((list, i) => {
            list.forEach((cell, j) => {
                const elem = DOM.cells[i * 3 + j];
                switch (cell) {
                    case X:
                        elem.classList.add("x");
                        break;
                    case O:
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
        if (Game.cells[x][y] !== EMPTY) {
            return;
        }
        Game.cells[x][y] = Game.turn;
        if (Game.checkResults()) {
            return;
        }
        Game.swapTurn();
        if (Game.difficulty !== TWO_PLAYERS && Game.turn === O) {
            Game.aiMove();
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
            if (Game.cells[a[0]][a[1]] !== EMPTY &&
                Game.cells[a[0]][a[1]] === Game.cells[b[0]][b[1]] &&
                Game.cells[a[0]][a[1]] === Game.cells[c[0]][c[1]]) {
                Game.endGame(Game.turn, false);
                return true;
            }
        }

        const isTie = Game.cells.flat().every(cell => cell !== EMPTY);
        if (isTie) {
            Game.endGame(null, true);
            return true;
        }

        return false;
    },

    swapTurn() {
        Game.turn = (Game.turn === X) ? O : X;
        DOM.board.classList.remove(Game.turn === X ? "o" : "x");
        DOM.board.classList.add(Game.turn === X ? "x" : "o");
        DOM.turn.innerText = `Turn: ${Game.getName(Game.turn)}`;
    },

    endGame(winner, tie) {
        if (tie) {
            DOM.playerWins.innerText = "It's a tie!";
        } else {
            DOM.playerWins.innerText = `${Game.getName(winner)} Wins!`;
        }
        Game.startGame(NORMAL);
        Game.swapModals();
        Game.showModals();
    },

    aiMove() {
        const availableMoves = [];

        // Collect all available moves (empty cells)
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (Game.cells[x][y] === EMPTY) {
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

// Event Listeners
DOM.startNorm.addEventListener('click', () => Game.startGame(NORMAL));
DOM.start2player.addEventListener('click', () => Game.startGame(TWO_PLAYERS));
DOM.restart.addEventListener('click', () => {
    Game.swapModals();
    Game.showModals();
});

// Add click events to cells
DOM.cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const x = Math.floor(index / 3);
        const y = index % 3;
        Game.captureCell(x, y);
    });
});