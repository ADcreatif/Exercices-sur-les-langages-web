"use strict";
const E = 69;
const S = 83;
const D = 68;
const F = 70;

let go = {
    top: false,
    right: false,
    bottom: false,
    left: false
};
let boat;

function onDocumentKeyDown() {
    switch (event.keyCode) {
        case E:
            go.top = true;
            break;
        case S:
            go.left = true;
            break;
        case D:
            go.bottom = true;
            break;
        case F:
            go.right = true;
            break;
    }
}

function onDocumentKeyUp() {
    switch (event.keyCode) {
        case E:
            go.top = false;
            break;
        case S:
            go.left = false;
            break;
        case D:
            go.bottom = false;
            break;
        case F:
            go.right = false;
            break;
    }
}


function animate(timestamp) {
    if (parseInt(timestamp) % 32 === 0) {
        boat.style.backgroundPositionX = parseInt(boat.style.backgroundPositionX) + 64 + 'px ';
    }

    let body = document.querySelector('body');
    let pos = 0;
    let backgroundPositionY;


    backgroundPositionY = parseInt(boat.style.backgroundPositionY) + 'px';

    if (go.right) {
        backgroundPositionY = '-128px';
        pos = boat.offsetLeft + boat.clientWidth + 5 <= body.clientWidth ? boat.offsetLeft + 5 : boat.offsetLeft;
        $(boat).css('left', pos + 'px');
    }

    if (go.bottom) {
        backgroundPositionY = '0px';
        pos = boat.offsetTop + boat.clientHeight + 5 <= body.clientHeight ? boat.offsetTop + 5 : boat.offsetTop;
        $(boat).css('top', pos + 'px');
    }

    if (go.left) {
        backgroundPositionY = '-64px';
        pos = boat.offsetLeft >= 5 ? boat.offsetLeft - 5 : 0;
        $(boat).css('left', pos + 'px');
    }

    if (go.top) {
        backgroundPositionY = '-192px';
        pos = boat.offsetTop >= 5 ? boat.offsetTop - 5 : 0;
        $(boat).css('top', pos + 'px');
    }

    boat.style.backgroundPositionY = backgroundPositionY;

    window.requestAnimationFrame(animate);
}

$(function () {
    boat = document.getElementById('boat');

    $(document).keydown(onDocumentKeyDown);
    $(document).keyup(onDocumentKeyUp);
    window.requestAnimationFrame(animate);
});