import DOM from './gameDOM.js';

let gameState = {
    // head first, then body and tail
    snake: [[1, 0], [0, 0]],
    apple: [4, 4],

    reset (){
        gameState.snake = [[1, 0], [0, 0]];
        gameState.apple =  [4, 4];
    }
};

const Game = {
    startGame() {
        gameState.reset();
        //TODO
    },
    endGame() {
        DOM.showModal();
        //TODO
    }
};

export default Game;