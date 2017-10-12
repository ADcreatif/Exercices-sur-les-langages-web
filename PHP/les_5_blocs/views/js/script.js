"use strict";

var toolBox;


function onMouseOutParagraphe(){
    // quand je sort d'un paragraphe
    this.classList.remove('hover');
    toolBox.classList.add('hidden')
}

function onMouseOverParagraphe(){
    // quand je survole un paragraphe
    this.classList.add('hover');
    toolBox.classList.remove('hidden');

    // on effectue d'abord la division puis le reste de gauche à droite donc addition et enfin concaténation
    toolBox.style.top = this.offsetTop + this.clientHeight/2 - toolBox.clientHeight/2 +"px";
}

function refreshTime(domObjects){
    var time;
    var h_time;
    var m_time;
    var s_time;

    // instanciation d'un objet Date() qui contient l'heure actuelle
    time = new Date();

    h_time = time.getHours();
    m_time = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    s_time = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();

    // avec cette boucle on modifie le contenu des éléments séléctionnés dans le dom.
    for(var index = 0 ; index < domObjects.length; index++){
        domObjects[index].innerText = h_time +':'+ m_time  +':'+ s_time;
    }

    setTimeout(function(){
        refreshTime(domObjects)
    },1000);

    /*for(var index in dates){
     if(dates.hasOwnProperty(index))
     console.log(dates[index]);
     }*/
}

function DOMLoaded(){

    // identification des éléments du DOM
    var domObjects = document.querySelectorAll('[data-time]');
    // fonction d'affichage de l'heure
    refreshTime(domObjects);

    toolBox = document.getElementById('tool-box');

    // assignation d'un écouteur d'évènement pour chaques paragraphes
    // jQuery : $('article p').mouseover(onMouseOverParagraphe).mouseout(onMouseOutParagraphe);
    var paragraphes =  document.querySelectorAll('article>p, article>.tool');
    for(var index = 0; index < paragraphes.length; index++){
        paragraphes[index].addEventListener('mouseover',onMouseOverParagraphe);
        paragraphes[index].addEventListener('mouseout',onMouseOutParagraphe);
    }
}

// j'attends que la page soit chargé pour utiliser les éléments du DOM
document.addEventListener("DOMContentLoaded", DOMLoaded);
// en jQuery : $(function(){DOMLoaded()})