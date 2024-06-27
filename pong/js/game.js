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

    delta: 1,
    frameID: 0,
    frame (){
        Game.update();
        Game.render();

        Game.frameID = requestAnimationFrame(Game.frame);
    },
    update (){

    },
    render (){

    }
};

export default Game;