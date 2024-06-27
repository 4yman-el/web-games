const DOM = {
    score: $('game-score'),
    render: $('game-render'),
    player: $q('.player'),
    ball: $q('.ball'),
    opponent: $q('.opponent'),
    updateScore (player, opponent){
        DOM.score.innerText = `Player ${player} : ${opponent} Opponent`;
    },
    updateBall (ball){
        DOM.ball.top = `${ball[0] / 3}%`;
        DOM.ball.right = `${ball[1] / 3}%`;
    }
};


export default DOM;