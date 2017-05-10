<?php

const FILE_NAME = 'password.csv';

function addPassword($user, $password){
    $ressource = fopen(FILE_NAME,'a');
    fputcsv($ressource, [$user,$password]);
    fclose($ressource);
}

function getUsers(){
    $ressource = fopen(FILE_NAME,'r');
    $users = [];

    while($ligne = fgetcsv($ressource)){
        $pseudo = $ligne[0];
        $pass   = $ligne[1];

        $users[$pseudo] = $pass;

    };

    fclose($ressource);

    return $users;
}


function checkPassword($pseudo, $password){
    $users = getUsers();

    //var_dump($users);exit;

    if(array_key_exists($pseudo, $users)){
        // l'utilisateur est bien présent dans la base

        if($password == $users[$pseudo] ){
            // l'utilisateur peut être loggué
            echo "connexion en cours";
        }

    }
}
