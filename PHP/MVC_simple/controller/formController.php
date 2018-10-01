<?php

// on vérifie que le formulaire est envoyé
if (array_key_exists('login', $_POST)) {

    // on extrait les variables du formulaire
    extract($_POST);
    // $pseudo = 'Francky';
    // $password = 'Vincent';

    // enfin on vérifie que le mot de passe est correct
    try {
        $password = new Password();
        $password->checkPassword($pseudo, $pass);

    } catch (DomainException $error) {
        $errors = $error->getMessage();
    }
}