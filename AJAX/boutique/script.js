'use strict';
/* global $ */
var tooltip;


function onAjaxMouseEnterLi(datas){
	// enfin on peut exploiter la ressource envoyé par php en sachant que c'est du JSON

	tooltip.children('h3').text(datas.name);
	tooltip.children('p').text(datas.description);
	tooltip.children('ul').empty().append(
		$('<li>').text('prix : '+datas.price),
		$('<li>').text('couleur : '+datas.color),
		$('<li>').text('poids : '+datas.weight)
	);

	tooltip.fadeIn()
}

function onMouseEnterLi(){

	// récupération de l'id de l'élément qui à été cliqué
	var productID = $(this).data('productid');

	// envoi de l'id au format get au php  ==> $_GET['productID'] = 2
	$.get(
		'products.php', 		// on envoit les données vers cette page
		'productID='+productID,	// c'est les données qu'on envoi
		onAjaxMouseEnterLi,		// quand la requete à fonctioné on est dirigé vers cette fonction callback
		'json'					// ce paramètre informe le callback que la réponse sera au format JSON
	);
}
function onMouseOutLi(){
	tooltip.fadeOut();
}

$(function(){
	tooltip = $('#tooltip');

	$('article').mouseenter(onMouseEnterLi);
	$('article').mouseout(onMouseOutLi);

	// positionnement du tooltip a côté de la souris
	$(window).mousemove(function(event){
		tooltip.css('left', event.clientX + 20);
		tooltip.css('top', event.clientY);
	});
})