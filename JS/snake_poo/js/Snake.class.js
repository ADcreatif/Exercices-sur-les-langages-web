"use strict";


class Snake {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.queue = [];
        this.direction = null;
    }

    reset() {
        // position
        this.x = 0;
        this.y = parseInt(BOARDSIZE / 2);

        // size
        this.queue = [];
        this.grow();

        // direction
        this.direction = "right";
    }

    move() {
        switch (this.direction) {
            case "left":
                this.x--;
                break;

            case "up":
                this.y--;
                break;

            case "right":
                this.x++;
                break;

            case "bottom" :
                this.y++;
                break;
        }
    }

    getScore() {
        // le score correspond à la taille de la tableau/queue/serpent/score
        return this.queue.length - 1;
    };

    grow() {
        // augmentation de la taille du tableau/queue/serpent/score
        for (let growing = 0; growing < GROWFACTOR; growing++) {
            this.queue.unshift(null);
        }
    };

    draw(board) {
        // repositionnement de l'élement sur l'écran

        // efface toutes le cellules
        $('.snake').removeClass('snake head tail');

        // on récupère la cellule en cours
        let cellID = board.getCellByCood(this.x, this.y);

        // mise à jour des coordonées occupées par la queue du serpent
        this.queue.push(cellID);
        this.queue.shift();

        // on boucle sur toutes le cellules occupées par le serpent
        for (let index = 0; index <= this.queue.length; index++) {
            let cell = $('#' + this.queue[index]);

            // on affiche le design de la tête
            if (index === this.queue.length - 1)
                cell.addClass('head');

            // ou celui de la queue
            else if (index === 0)
                cell.addClass('tail');

            cell.addClass('snake');
        }
    }
}