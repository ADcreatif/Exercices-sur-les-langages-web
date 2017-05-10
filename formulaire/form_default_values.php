<?php

$pseudo = "";
$password = "";
$email = "";
$telephone = "";
$ville = "";

if(array_key_exists('envoi', $_POST)){
	
	if(
		empty($_POST['pseudo']) || 
		empty($_POST['email']) ||
		empty($_POST['telephone']) ||
		empty($_POST['ville']) ||
		empty($_POST['password'])	
	){
		echo "l'un des champs est vide";
				
		$pseudo = $_POST['pseudo'];
		$password = $_POST['password'];
		$email = $_POST['email'];
		$telephone = $_POST['telephone'];
		$ville = $_POST['ville'];
		
	} else {
		echo 'mon pseudo est : '.$_POST['pseudo'];
	}
}
?>

<form method="post">
<ul>
	<li>
		<input type="text" name="pseudo" placeholder="pseudo" value="<?=$pseudo?>">
	</li>
	<li>
		<input type="text" name="email" placeholder="email" value="<?=$email?>">
	</li>
	<li>
		<input type="text" name="telephone" placeholder="telephone" value="<?=$telephone?>">
	</li>
	<li>
		<input type="text" name="ville" placeholder="ville" value="<?=$ville?>">
	</li>
	<li>
		<input type="password" name="password" placeholder="mot de passe" value="<?=$password?>">
	</li>
	<li>
		<input type="submit" name="envoi" value="envoyer">
	</li>
</ul>
</form>