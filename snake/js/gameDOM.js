const DOM = {
    GameOver: $('modal'),
    restart: $('restart'),
    Score: $('score'),
    GameCanvas: $('game-canvas'),
    mobileButtons: $('mobile-controls').children,

    hideModal() {
        DOM.GameOver.classList.add('hidden');
    },

    showModal() {
        DOM.GameOver.classList.remove('hidden');
    },
};


export default DOM;