import { gameState } from "./game";

const AI = {
    getDir (){
        // Neural Network: Am I a joke to you?
        // - Y E S.

        // `~~` is trick for `Math.floor`
        let dir = ~~(Math.random() * 2) - 1;
        return dir;
    }
};

export default AI;