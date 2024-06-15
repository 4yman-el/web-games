import { DOM, GameModes } from './constants.js';
import Game from './game.js';

// Event Listeners
DOM.startNorm.addEventListener('click', () => Game.startGame(GameModes.NORMAL));
DOM.start2player.addEventListener('click', () => Game.startGame(GameModes.TWO_PLAYERS));
DOM.restart.addEventListener('click', () => {
    DOM.swapModals();
    DOM.showModals();
});

// Add click events to cells
DOM.cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        const x = Math.floor(index / 3);
        const y = index % 3;
        Game.captureCell(x, y);
    });
});