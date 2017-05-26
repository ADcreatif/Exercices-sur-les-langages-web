<?php
/* ------------------------------------------------------------ */
/*                          Configuration                       */
/* ------------------------------------------------------------ */
require_once "smarty/Smarty.class.php";

/* Configuration de smarty */
$smarty = new Smarty();
$smarty->setTemplateDir('views');
$smarty->setCompileDir('smarty/templates_c');
$smarty->setCacheDir('smarty/cache');
$smarty->setConfigDir('smarty/configs');
$smarty->caching = 0;

/* gestion des url */
// on crée deux constantes qui vont permettre de créer des url pour les assets (img, css, js...)
define('HOME', preg_replace("/index.php/", '', $_SERVER['SCRIPT_NAME']));
define('VIEW', HOME .'views/');




/* ------------------------------------------------------------ */
/*                          Début du script                     */
/* ------------------------------------------------------------ */


$tableau = [
    ['type' => 'veggie', 'name' => 'tomate'],
    ['type' => 'veggie', 'name' => 'carotte'],
    ['type' => 'veggie', 'name' => 'carotte'],
    ['type' => 'veggie', 'name' => 'carotte'],
    ['type' => 'veggie', 'name' => 'carotte'],
    ['type' => 'fruit', 'name' => 'cerise']
];

$smarty->assign('pseudo', 'Alan');
$smarty->assign('tableau', $tableau);



if(array_key_exists('p',$_GET)){
    $template = $_GET['p'];
} else {
    $template = 'accueil';
}
$smarty->display("$template.tpl");