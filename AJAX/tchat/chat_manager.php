<?php


function addMessage($message, $pseudo){
	// ajout d'un message à la fin du CSV

	$chat = fopen('chat.csv', 'a');
	date_default_timezone_set ( 'Europe/Paris' ) ;
	fputCSV($chat, [date('H:i:s'), $pseudo, $message] );
	fclose($chat);
}

function getMessages(){
	// récupération de tous les messages

	$chat = fopen('chat.csv', 'r');
	$messages = [];
	while($message = fgetCSV($chat)){
		array_push($messages, [
			'time' => $message[0],
			'pseudo' => $message[1],
			'message' => $message[2]
		]);
	}
	fclose($chat);
	return $messages;
}


if(array_key_exists('message', $_POST)){
	//ajout d'un message au chat

	extract($_POST); // fonction qui transforme les clés du tableau $_POST en $variables

	if($pseudo != '' & $message != ''){
		addMessage($message, $pseudo);
	}
}

if(array_key_exists('refreshMessage', $_GET)){
	// récupération des messages depuis ajax

	echo json_encode(getMessages());
}

