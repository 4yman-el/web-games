import DOM from './gameDOM.js';
import Game from './game.js';

/* Event Listeners
DOM.restart.addEventListener("click", Game.startGame);

document.addEventListener("keydown", (evt) => Game.changeDir(evt.key));

DOM.mobileButtons[0].addEventListener("click", () => Game.changeDir("ArrowUp"));
DOM.mobileButtons[2].addEventListener("click", () => Game.changeDir("ArrowDown"));
//*/

DOM.render.addEventListener("click", Game.frame, { once: true });