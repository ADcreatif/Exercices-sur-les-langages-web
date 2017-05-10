$(function(){	
	function onClickLink(event) {
		
		// récupération de l'attribut href du lien
		var data = 'href=' + this.dataset.href;
		
		
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

		// inibition du comportement du lien par d�faut
		event.preventDefault();
	}			

	// écouteur d'événement sur tous les liens de la page
	$('a').click(onClickLink);
});