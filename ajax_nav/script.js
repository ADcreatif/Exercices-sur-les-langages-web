"use strict";

/**
 * Cette fonction récupère et affiche le contenu de la page demandé
 * @param pageName string nom de la vue à charger
 */
function changePage(pageName){
    // récupération de l'attribut href du lien
    var data = 'href=' + pageName;

    // envoi de la requête ajax avec la méthode get
    $.get('ajax.php', data, function(reponse){
        // réponse php en cas de succès
        var main = $('main');

        // on masque le contenu du main
        main.fadeOut('slow',function(){
            // quand l'animation est terminée on le réaffiche avec le contenu de la réponse php
            main.empty().append(reponse).fadeIn();
        })
    });
}

var onSubmitForm = function(event){
    var data;

    data = 'form=1&' + $(this).serialize();

    $.post('ajax.php', data, function(reponse){
        console.log('success', reponse);
    });

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

	// affichage d'une page par défaut
    changePage('home');

	// écouteur d'événement sur tous les liens de la page
	$('a').click(onClickLink);

	// grace à la métode on, on peut mettre un écouteur qui n'existe pas encore dans le DOM (le formailaire)
    $('main').on('submit','form',onSubmitForm);
});