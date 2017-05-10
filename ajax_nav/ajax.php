<?php


if(array_key_exists('href',$_GET)){
	include 'pages/'.$_GET['href'].'.phtml';
}