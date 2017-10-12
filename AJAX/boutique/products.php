<?php


$products = [
	['name'=> 'Sèche cheveux','description'=>'babyliss sèche cheveux rétroprogramable 10vitesses. N\'as encore jamais tué personne','picture'=>'babyliss.jpg', 'price' => 450.00, 'weight' => '17kg', 'color' => 'rose fushia' ],
	['name'=> 'Patator','description'=>'Patator homemade, réplique originale de celui de jean claire van hamme faite en résine', 'picture'=>'patator.jpg', 'price' => 150.40, 'weight' => '1.5kg', 'color' => 'vert bonbon' ],
	['name'=> 'Peluche Licorne','description'=>'Peluche arrante et douce. Elle est facilement transportable que pour les enfants', 'picture'=>'peluche.jpg', 'price' => 21.99, 'weight' => '120kg', 'color' => 'sel rouge' ],
	['name'=> 'Ballon de beaudruche','description'=>'Lot de 5000 ballons de beaudruche prégonflés à moitié pour évênement a moitié importants. ', 'picture'=>'ballons.jpg', 'price' => 119.20, 'weight' => '30.5kg', 'color' => 'multicolore' ],
	['name'=> 'Animal de compagnie','description'=>'Petite mithe fraichement abatue pour tenir compagnie au personnes agées. Permettre peut être une réconciliation familiale qui sait ? ', 'picture'=>'mite.jpg', 'price' => 1.00, 'weight' => '500g', 'color' => 'sombre héro' ],
	['name'=> 'Laisse pour chien','description'=>'« Put down pooch with the Dog Leash gun » ! L’humour est d’un goût légèrement douteux mais drôle quand même', 'picture'=>'laisse.jpg', 'price' => 39.50, 'weight' => '200mg', 'color' => 'noir souffre' ]
];

function getProducts(){
	global $products;
	return $products;
}

function getProduct($productID){
	global $products;
	return  $products[$productID];
}

if(array_key_exists('productID', $_GET)){

	// on renvoi au javascript les données du produits au format JSON
	echo json_encode(getProduct($_GET['productID']));

}