<?php

ini_set('display_errors', 0);

echo '<meta charset="utf-8">';
try{
	// on essai de faire des trucs ici

	if( !mail('alan@3wa.fr','salut') ){
		throw new DomainException('Le mail n\'est pas parti');
	}


} catch(DomainException $e) {
	echo "<p>Il y à eu un problème dans votre requête <strong>".$e->getMessage() ."</strong></p>";
	
	
	// si ça ne marche pas on est renvoyé dans le catch
	
}