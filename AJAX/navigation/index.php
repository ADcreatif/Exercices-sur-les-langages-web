<?php

if(array_key_exists('page', $_GET)){
	$template = 'view/'. $_GET['page'] .'.phtml';
} else {
	$template =  'view/home.phtml';
}

include 'view/layout.php';
