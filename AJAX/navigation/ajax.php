<?php

function getMessages() {
    $file = 'messages.csv';
    $csv = fopen($file, 'r');

    $messages = [];

    while ($message = fgetcsv($csv)){
        array_push($messages, $message[1]);
    }
    fclose($csv);

    return $messages;
}

// gestion de la navigation
if(array_key_exists('href',$_GET)){

    $page = $_GET['href'];

    // on récupère les éventuelles variables du template
    switch($page){
        case 'message':
            $messages = getMessages();
            break;
    }

    //on affiche le template
	include "pages/$page.phtml";
}

// gestion du formulaire
if(array_key_exists('form',$_POST)){
    $file = 'messages.csv';

    $csv = fopen($file,'a');
    fputcsv($csv, [$_POST['name'] , $_POST['message']]);

    fclose($csv);
}