<?php

if(array_key_exists('page', $_GET)){
	$template = 'pages/'. $_GET['page'] .'.phtml';
} else {
	$template =  'pages/home.phtml';
}

include 'pages/layout.php';
