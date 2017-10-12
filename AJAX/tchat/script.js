'use strict';
/* global $ */

function onAjaxRefreshMessages(datas){

	// découpe le tableau sur les 20 dernières phrases
	datas = datas.slice(-10, datas.length );


	var messages = $('<div>');

	for (var i = 0; i < datas.length; i++) {
		if(datas.hasOwnProperty(i)){
			messages.append(
				$('<strong>').addClass('pseudo').text(datas[i].pseudo),
				$('<small>').addClass('time').text('(posté à '+datas[i].time+')'),
				$('<p>').addClass('message').text(datas[i].message)
			);
		}
	}

	$('#messages').empty().append(messages.contents());
}


function refreshMessages(){
	// récupération des messages du serveur
	$.get(
		'chat_manager.php', 	// url d'envoi des données
		'refreshMessage',		// query string envoyé
		onAjaxRefreshMessages,	// fonction en cas de succès
		'json'					// types de données attendues en réponse du php
	);

}

function onSubmitForm(event){
	event.preventDefault();

	var message = $('[name="message"]');
	var pseudo = $('[name="pseudo"]');
	pseudo.attr('disabled', 'disabled');

	// récupération des données du formulaire  'message=salut&pseudo=alan'
	var datas = 'message='+ message.val() +'&pseudo=' + pseudo.val();

	message.val('');

	// envoi du nouveau message au php en ajax
	$.post('chat_manager.php', datas, refreshMessages);

}

var interval;

function stopInterval(){
	clearInterval(interval)
}

$(function(){

	$('form').submit(onSubmitForm);

	interval = setInterval(refreshMessages,3000);
});