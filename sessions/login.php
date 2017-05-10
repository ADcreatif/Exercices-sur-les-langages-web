<?php
session_start();


$_SESSION = [
	'user' => [
		'name' => 'Alan',
		'user_id' => 119,
		'profil' => 'alan_profile.jpg',
		'fontFamily' => 'Comic Sans MS',
		'backgroundColor' => 'yellow',
		'skill' => 'ultra powerfull',
	],
	'cart' => [
		1 => ['boucles pendentif', 3.45, 1],
		2 => ['sauce tomate', 1.23, 4]
	]
];

header("Location: index.php");
exit;
	
