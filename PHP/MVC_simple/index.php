<?php
include 'model/password.php';
$errors = "";

$page = 'form';                                 // nom de la page à afficher souvent $_GET['page'];
include 'controller/' . $page . 'Controller.php';   // chargement du controller
include 'view/' . $page . 'View.phtml';             // chargement de la vue