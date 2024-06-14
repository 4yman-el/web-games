const DOM = {
    overlay: $q('.overlay'),
    modeModal: $('mode-modal'),
    startEasy: $('start-easy'),
    startNorm: $('start-norm'),
    start2player: $('start-2player'),
    winModal: $('win-modal'),
    playerWins: $('player-wins'),
    restart: $('restart'),
    turn: $('game-turn'),
    cells: $qa('.cell')
};

const EMPTY = 0;
const X = 1;
const O = 2;

const EASY = 0;
const HARD = 1;
const TWO_PLAYERS = 2;

const Game = {
    cells: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ],
    turn: X,
    difficulty: TWO_PLAYERS
};

function getName (turn){
    if (turn === X) return 'Player (X)';
        
    if (Game.difficulty === TWO_PLAYERS) {
        return 'Opponent (O)';    
    } else {
        return 'Computer (O)';
    }
}

function swapModals (){
    DOM.modeModal.classList.toggle('hidden');
    DOM.winModal.classList.toggle('hidden');
}

function hideModals (){
    DOM.overlay.classList.add('hidden');
}

function showModals (){
    DOM.overlay.classList.remove('hidden');
}

function startGame (mode){
    hideModals();
    Game.turn = X;
    Game.difficulty = mode;
    Game.cells = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    updateBoard();
}

function updateBoard (){
    Game.cells.forEach(
    (list, i) => {
        list.forEach(
        (cell, j) => {
            const elem = DOM.cells[i + j];
            switch (cell) {
                case X:
                    elem.classList.add("X");
                    break;
                case O:
                    elem.classList.add("O");
                    break;
                default:
                    elem.classList.remove("X");
                    elem.classList.remove("O");
                    break;
            }
        });
    });
}

function captureCell (x, y){
    Game.cells[x][y] = Game.turn;
    updateBoard();
}

function checkResults (){
    // TODO
    // endGame(smth, potato)
}

function swapTurn() {
    if (Game.turn === X) {
        Game.turn = O;
    } else {
        Game.turn = X;
    }
}

function endGame (winner, tie){
    if (tie) {
        DOM.playerWins.innerText = `It's a tie!`;
    } else {
        DOM.playerWins.innerText = `${getName(winner)} Wins!`;
    }
    swapModals();
    showModals();
}