<?php
/**
 * Nous avons ici le CONTROLLER associé à la VUE "shopping list"
 * son but est de reccuillir les données du modèle "Items"
 * pour les renvoyer à la vue "shopping list"
 */


require_once "models/Items.php";

$items = new Items();

/***************************************************************
 *
 * Récupération des instructions envoyées par l'utilisateur (vue)
 *
 ***************************************************************/

// pour ajouter un item
if (array_key_exists('add_item', $_POST)) {
    $title = trim($_POST['title']);
    $quantity = intval($_POST['quantity']);
    $price = $_POST['price'];
    $category = trim($_POST['category']);

    if (!empty($title))
        if (ctype_digit($price))
            $items->create_item($title, $quantity, $price, $category);
        else
            echo 'le prix ou la quantité doivent être des chiffres.';
    else
        echo 'Vous devez donner un nom à votre élément';
}


// pour supprimer un item
if (array_key_exists('delete_item', $_GET)) {
    $item_id = intval($_GET['item_id']);
    $items->remove_item($item_id);
}


/***************************************************************
 *
 * Préparation des données qu'on va afficher dans la vue
 *
 ***************************************************************/

$shopping_list = $items->get_all_item();

