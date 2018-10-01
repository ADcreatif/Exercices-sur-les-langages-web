<?php

// lien vers le fichier index.php (page d'accueil)
$index_url = "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['SCRIPT_NAME'];

// suppression de index.php pour avoir l'url racine
define('HOME', str_replace('index.php', '', $index_url));
define('VIEWS', HOME . 'views/');


// selection du bon template
if (array_key_exists("page", $_GET)) {
    $page = $_GET['page'];

    if (file_exists("controllers/$page.php")) {
        include "controllers/$page.php";
    }

    if (file_exists("views/$page.phtml")) {
        // dans le cas ou la page est trouvée
        $template = $page;
    } else {
        // résultat si la page n'existe pas
        $template = 404;
    }
} else {
    // page par défaut
    $template = "home";
}


include "views/layout.phtml";