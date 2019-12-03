"use strict";

const STATUS_EATAPPLE = 0;
const STATUS_EATSELF = 1;
const STATUS_VICTORY = 2;
const STATUS_OUTOFBOUND = 3;
const STATUS_OK = 4;

class Game {

    constructor() {

        this.snake = new Snake();
        this.board = new Board();
        this.board.generateBoard();

        this.apple = new Apple(this.snake);

        this.timer = null;
        this.pause = false;

        // event listeners
        $('#start').click(this.onClickStart.bind(this));
        $(document).keydown(this.onKeyDown.bind(this))

    }

    gameLoop() {
        // moving snake
        this.snake.move();

        switch (this.checkStatus()) {
            case STATUS_EATSELF:
            case STATUS_VICTORY:
            case STATUS_OUTOFBOUND:
                this.endGame();
                break;

            case STATUS_EATAPPLE:
                this.snake.grow();
                this.apple.generateApple();
                $('#score').find('span').text(this.snake.getScore());

            case STATUS_OK:
                this.snake.draw(this.board);
                break;

            default:
                break;
        }
    }

    checkStatus() {
        // get cells ocupied by the snake
        let cellID = this.board.getCellByCood(this.snake.x, this.snake.y);

        if (this.board.haveApple(cellID)) {
            return STATUS_EATAPPLE;
        }

        if (this.snake.queue.indexOf(cellID) !== -1) {
            return STATUS_EATSELF;
        }

        if (this.snake.queue.length >= BOARDSIZE * BOARDSIZE) {
            return STATUS_VICTORY;
        }

        if (this.snake.x >= BOARDSIZE ||
            this.snake.y >= BOARDSIZE ||
            this.snake.x < 0 ||
            this.snake.y < 0) {
            return STATUS_OUTOFBOUND;
        }

        return STATUS_OK;
    }

    onKeyDown(event) {

        // the 'if' condition prevent to go in oposite direction and eat yourself
        switch (event.keyCode) {
            case 37:
                if (this.snake.direction !== 'right')
                    this.snake.direction = "left";
                break;
            case 38:
                if (this.snake.direction !== 'bottom')
                    this.snake.direction = "up";
                break;
            case 39:
                if (this.snake.direction !== 'left')
                    this.snake.direction = "right";
                break;
            case 40:
                if (this.snake.direction !== 'up')
                    this.snake.direction = "bottom";
                break;
        }

        // disable the scroll of page
        event.preventDefault()
    }

    endGame() {
        $('#start').text('Start');
        clearInterval(this.timer);
        this.timer = null;
    }

    onClickStart() {

        if (this.timer !== null) {
            // set pause
            $('#start').text('Start');
            clearInterval(this.timer);
            this.timer = null;
            this.pause = true;
        } else {
            // start New Game
            $('#start').text('Pause');
            //$('#score').find('span').text(0);
            this.timer = setInterval(this.gameLoop.bind(this), 1 / GAMESPEED * 1000);

            if (this.pause === false) {
                this.snake.reset();
                this.apple.generateApple();
            } else {
                this.pause = true;
            }
        }
    }
}
