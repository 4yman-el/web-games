import DOM from './gameDOM.js';
import AI from './ai.js';

const MAIN_SPEED = 2;

let gameState = {
    playerTop: 46,
    playerDir: 0,
    opponentTop: 46,
    ball: [48, 48],
    ballVel: [0, 1],
    scores: [0, 0],
};

const Game = {
    paddleHeight: .08,
    ballSize: .2,

    delta: 1,
    frameID: 0,

    incScore (type){
        switch (type) {
            case "player":
                gameState.scores[0]++;
                break;
            case "opponent":
                gameState.scores[1]++;
                break;
            default:
                // What?
                console.warn("Score for unknown type!");
                break;
        }
        DOM.renderScore();
    },
    frame (){
        Game.update();
        Game.render();

        Game.frameID = requestAnimationFrame(Game.frame);
    },
    update (){
        // ball
        gameState.ball[0] += gameState.ballVel[0];
        gameState.ball[1] += gameState.ballVel[1];

        // player
        gameState.playerTop += gameState.playerDir * MAIN_SPEED;

        // Get AI move dir
        gameState.opponentTop += AI.getDir();

        // COLLISION DETECTION
        // potato


    },
    render (){
        // paddles
        DOM.player.top = `${gameState.playerTop}%`;
        DOM.opponent.top = `${gameState.opponentTop}%`;

        DOM.renderBall();
    },
};

export {Game, gameState};