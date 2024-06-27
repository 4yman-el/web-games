import DOM from './gameDOM.js';

let gameState = {
    playerTop: .5,
    opponentTop: .5,
    ball: [.48, .48],
    ballVel: [0, 1],
    scores: [0, 0],
};

const Game = {
    paddleHeight: .08,
    ballSize: .2,
};

export default Game;