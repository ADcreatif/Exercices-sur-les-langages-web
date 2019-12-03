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

        // Looking for a random cell no ocupied by snake (!= -1)
        do {
            this.cellID = this.getRandomCell();
        } while (this.snake.queue.indexOf(this.cellID) !== -1);

        // Clearing board before adding apple
        $('.apple').removeClass('apple');
        $('#' + this.cellID).addClass('apple');
    }
}