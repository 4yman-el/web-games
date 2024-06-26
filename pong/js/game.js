import DOM from './gameDOM.js';

let gameState = {
    /* head first, then body and tail
    snake: [[1, 0], [0, 0]],
    dir: [0, 0],
    apple: [4, 4],
    score: 0,
    over: false,
    freezeTail: false,

    reset (){
        gameState.snake = [[1, 0], [0, 0]];
        gameState.dir = [0, 0];
        gameState.apple =  [4, 4];
        gameState.score = 0;
        gameState.over = false;
    }//*/
};

const Game = {/*
    gridSize: 9,
    /**
     * @type {CanvasRenderingContext2D}
     * /
    gameCanvas: DOM.GameCanvas.getContext('2d'),
    gameLoop: 0,
    moved: false,

    startGame() {
        gameState.reset();
        Game.updateScore();
        DOM.hideModal();
        Game.gameLoop = setInterval(Game.frame, 150);
    },
    changeDir (dir){
        if(Game.moved) return;
        Game.moved = true;

        if (dir === "ArrowUp" && gameState.dir[1] != 1) {
            gameState.dir[0] = 0;
            gameState.dir[1] = -1;
        } else if (dir === "ArrowDown" && gameState.dir[1] != -1) {
            gameState.dir[0] = 0;
            gameState.dir[1] = 1;
        } else if (dir === "ArrowLeft" && gameState.dir[0] != 1) {
            gameState.dir[0] = -1;
            gameState.dir[1] = 0;
        } else if (dir === "ArrowRight" && gameState.dir[0] != -1) {
            gameState.dir[0] = 1;
            gameState.dir[1] = 0;
        }
    },
    growSnake (){
        gameState.freezeTail = true;
        gameState.score++;
        Game.updateScore();
    },
    updateScore (){
        DOM.Score.innerText = `Score: ${gameState.score}`;
    },
    newApple(){
        while (
        gameState.snake.find((part) => {
            return  part[0] == gameState.apple[0] &&
                    part[1] == gameState.apple[1];
        })) {
            gameState.apple = [
                ~~(Math.random() * Game.gridSize),
                ~~(Math.random() * Game.gridSize)
            ];
        }
    },
    frame (){
        if (gameState.dir[0] != 0 ||
            gameState.dir[1] != 0) {
            // Update head
            gameState.snake.unshift([
                gameState.snake[0][0] + gameState.dir[0],
                gameState.snake[0][1] + gameState.dir[1]
            ]);

            if (!gameState.freezeTail) {
                gameState.snake.pop();
            }

            gameState.freezeTail = false;
        }

        Game.moved = false;

        // Check snake body is out of wall or no
        if (gameState.snake[0][0] < 0 || gameState.snake[0][0] > Game.gridSize ||
            gameState.snake[0][1] < 0 || gameState.snake[0][1] > Game.gridSize) {
            Game.endGame();
        }

        for (let i = 1; i < gameState.snake.length; i++) {
            // Check snake head hit body or no
            if (i !== 0 && gameState.snake[0][1] === gameState.snake[i][1] &&
                    gameState.snake[0][0]        === gameState.snake[i][0]) {
                Game.endGame();
            }
        }

        if (gameState.snake[0][0] === gameState.apple[0] &&
            gameState.snake[0][1] === gameState.apple[1]) {
            Game.growSnake();
            Game.newApple();
        }

        Game.render();
    },
    render (){
        const ctx = Game.gameCanvas;

        ctx.clearRect(0, 0, 400, 400);

        ctx.fillStyle = '#9F9';
        ctx.fillRect(
            gameState.snake[0][0] * 40,
            gameState.snake[0][1] * 40,
            40, 40
        );

        ctx.fillStyle = '#6E7';
        for (let i = 1; i < gameState.snake.length - 1; i++) {
            ctx.fillRect(
                gameState.snake[i][0] * 40,
                gameState.snake[i][1] * 40,
                40, 40
            );
        }

        ctx.fillStyle = '#3A5';
        ctx.fillRect(
            gameState.snake[gameState.snake.length - 1][0] * 40,
            gameState.snake[gameState.snake.length - 1][1] * 40,
            40, 40
        );

        ctx.fillStyle = '#99F';
        ctx.fillRect(
            gameState.apple[0] * 40 + 5,
            gameState.apple[1] * 40 + 5,
            30, 30
        );
    },
    endGame() {
        clearInterval(Game.gameLoop);
        gameState.over = true;
        gameState.reset();
        DOM.showModal();
    }//*/
};

export default Game;