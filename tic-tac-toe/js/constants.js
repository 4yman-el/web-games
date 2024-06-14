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

const Players = {
    EMPTY: 0,
    X: 1,
    O: 2
};

const GameModes = {
    NORMAL: 0,
    TWO_PLAYERS: 1
};

export { DOM, Players, GameModes };