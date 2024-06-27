const DOM = {
    score: $('game-score'),
    render: $('game-render'),
    player: $q('.player'),
    ball: $q('.ball'),
    opponent: $q('.opponent'),
    renderScore (player, opponent){
        DOM.score.innerText = `Player ${player} : ${opponent} Opponent`;
    },
    renderBall (ball){
        DOM.ball.top = `${ball[0]}%`;
        DOM.ball.right = `${ball[1]}%`;
    }
};


export default DOM;