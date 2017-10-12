<?php include "header.php" ?>

<?php 

if(array_key_exists('action', $_GET) && $isLogged){
	if($_GET['action'] == 'add_to_cart'){
		
		$product_id = intval($_GET['product_id']);
		$product_quantity =  intval($_GET['product_quantity']);
		array_push($_SESSION['cart'], ['Dosettes Café', $product_id, $product_quantity ]);
	}
}
?>

<h1>index</h1>
<p>Un paragraphe</p>
<p>La souris volante - Court-métrage (1934) - SensCritique
https://www.senscritique.com/film/La_souris_volante/438286
 Note : 6/10 - ‎75 votes
La souris volante est un court-métrage de David Hand. américain (1934). Retrouvez les avis à propos de La souris volante (The Flying Mouse).
Vous avez consulté cette page le 08/05/17.</p>

<article>
	<h2>Dosettes Café</h2>
	<p>Café arabica 100% commerce équitable</p>
	<a href="index.php?action=add_to_cart&product_id=12&product_quantity=1">Ajouter au panier</a>
</article