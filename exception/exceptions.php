<?php

ini_set('display_errors', 0);

try{
	// on essai de faire des trucs ici
	if( !mail('wrong@mail.com','sujet') ){
		throw new DomainException('Le mail n\'est pas parti');
	}

} catch(DomainException $e) {
    // si ça ne marche pas on est renvoyé dans le catch
    $error = $e->getMessage();
    include('error_template.phtml');
}
