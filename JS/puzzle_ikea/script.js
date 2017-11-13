"use strict";

const PAS = 600;

function getCoordFromPos(position){
    switch(position){
        case "top":
        case "left":
            return 0;

        case "middle":
            return 200;

        case "bottom":
        case "right":
            return 400;
    }
}

function getInitialPosition(className){
    var position = className.split('-');

    return [getCoordFromPos(position[0]), getCoordFromPos(position[1])]
}

function onClickTd(){
    if(this.style.backgroundPositionX !== ""){
        this.style.backgroundPositionX = parseInt(this.style.backgroundPositionX) + PAS + 'px';
    } else{
        var positions = getInitialPosition(this.classList.toString());
        var newX = positions[0] - PAS;
        this.style.backgroundPosition = -newX + 'px ' + -positions[1] + 'px';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var cell = document.querySelectorAll('td');
    for(var index in cell){
        if(cell.hasOwnProperty(index)){
            cell[index].addEventListener('click', onClickTd)
        }
    }
});