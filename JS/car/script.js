"use strict";

var car;
var border;

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const KEY_Z = 90;
const KEY_Q = 81;
const KEY_S = 83;
const KEY_D = 68;

const KEY_E = 65;
const KEY_A = 69;

var keys = {
    up:false,
    down:false,
    left:false,
    right:false
}

function moveCar(){
    // gestion du déplacement
    if(keys.left && car.offsetLeft > border.left){
        car.style.left = (car.offsetLeft -5) + 'px';
    }
    if(keys.right && car.offsetLeft < border.right){
        car.style.left = (car.offsetLeft +5) + 'px';
    }

    if(keys.up && car.offsetTop > border.top){
        car.style.top = (car.offsetTop -5) + 'px';
    }
    if(keys.down && car.offsetTop < border.bottom){
        car.style.top = (car.offsetTop +5) + 'px';
    }

    // gestion de la vue
    var direction_tmp = "";
    var direction_cur = car.classList.toString();

    if(keys.left){
        direction_tmp += "left";
    } else if (keys.right){
        direction_tmp += "right";
    }

    if(keys.up){
        direction_tmp += "up";
    } else if(keys.down){
        direction_tmp += "down";
    }

    if(direction_tmp && direction_cur != direction_tmp){
        car.classList.remove(direction_cur);
        car.classList.add(direction_tmp);
    }

    // on rappelle la fonction à chaque rafraichissement de l'image (60fps)
    window.requestAnimationFrame(moveCar);
}



var onKeyDown = function(event){
    var keycode = event.keyCode || event.which;

    switch(keycode){
        case KEY_LEFT :
        case KEY_Q :
            keys.left=true;
            break;
        case KEY_RIGHT :
        case KEY_D :
            keys.right=true;
            break;
        case KEY_UP :
        case KEY_Z :
            keys.up=true;
            break;
        case KEY_DOWN :
        case KEY_S :
            keys.down=true;
            break;
    }

    if(keycode == KEY_E){
        document.getElementById("audio_start").play();
    }
    if(keycode == KEY_A){
        document.getElementById("audio_horn").play();
    }
}

var onKeyUp = function(event){
    var keycode = event.keyCode || event.which;

    switch(keycode){
        case KEY_LEFT :
        case KEY_Q :
            keys.left=false;
            break;
        case KEY_RIGHT :
        case KEY_D :
            keys.right=false;
            break;
        case KEY_UP :
        case KEY_Z :
            keys.up=false;
            break;
        case KEY_DOWN :
        case KEY_S :
            keys.down=false;
            break;
    }
}

// Point d'entré du script, on démarre seulement quand le dom est complètement chargé
document.addEventListener('DOMContentLoaded', function(){
    // définition de l'object car
    car = document.getElementById('car');

    // gestion des bordures
    var city = document.getElementById('city');
    border       = {
        'left'  : city.offsetLeft,
        'right' : city.clientWidth + city.offsetLeft - car.clientWidth,
        'top'   : city.offsetTop,
        'bottom': city.clientHeight + city.offsetTop - car.clientHeight
    }

    // on associe 2 écouteurs d'évènement quand on appuie/relâche le clavier
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // on crée une boucle infinie qui s'exécute toute les  1/20e de seconde (50ms)
    window.requestAnimationFrame(moveCar);
});
