"use strict";
/* global $ */

function onAjaxChangePage(reponse){
	var main = $('main');

	// on masque le contenu du main
	main.fadeOut('slow',function(){
	    // quand l'animation est terminée on le réaffiche avec le contenu de la réponse php
	    main.empty().append(reponse).fadeIn();
	})
}

/**
 * Cette fonction récupère et affiche le contenu de la page demandé
 * @param pageName string nom de la vue à charger
 */
function changePage(pageName){

    // envoi de la requête ajax avec la méthode get
    $.get(
    	'ajax.php', 			// url de la page à contacter
    	'href=' + pageName,		// récupération de l'attribut href du lien
    	onAjaxChangePage		// execution d'un callback si la requête est un success
    );
}

var onSubmitForm = function(event){
    var data;

    $.post(
    	'ajax.php',
    	'form=1&' + $(this).serialize(),
    	function(reponse){console.log('success', reponse);}
	);

	// éviter l'envoi du formulaire
    event.preventDefault();
};

var onClickLink = function(event) {
    // on lance la fonction de changement de page
    changePage(this.dataset.href);

    // inibition du comportement du lien par défaut
    event.preventDefault();
};


// attendre que le DOM soit chargé
$(function(){

	var loader = $('#loader')
    $(document).ajaxStart(function(){loader.fadeIn()})
    $(document).ajaxStop(function(){loader.fadeOut()})

	// affichage d'une page par défaut
    changePage('home');

	// écouteur d'événement sur tous les liens de la page
	$('a').click(onClickLink);

	// grace à la métode on, on peut mettre un écouteur qui n'existe pas encore dans le DOM (le formailaire)
    $('main').on('submit','form',onSubmitForm);


});