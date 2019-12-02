"use strict";

class Apple {
    constructor(snake) {
        this.snake = snake;
        this.cellID = null;
    }

    getRandomCell() {
        return Math.floor(Math.random() * BOARDSIZE * BOARDSIZE);
    }

    generateApple() {

        // on cherche une cellule aléatoire jusqu'a ce que celle çi ne soit
        // plus occupé par la queue du serpent (indexOf différent de -1)
        do {
            this.cellID = this.getRandomCell();
        } while (this.snake.queue.indexOf(this.cellID) !== -1);

        // pour éviter les doublons de pommes on les effaces toutes avant d'en créer une nouvelle
        $('.apple').removeClass('apple');
        $('#' + this.cellID).addClass('apple');
    }
}