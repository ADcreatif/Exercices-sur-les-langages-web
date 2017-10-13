<?php

/*
 * - Une classe abstraite NE PEUT ÊTRE INSTANCIE
 *
 * - l'autre intérèt d'une classe abstraite c'est de connaitre
 *   les méthode de ses enfants sans forcément avoir les définir
 *   de suite, celà est utile pour le polymorphisme
 *
 * - une classe abstraite de NE PEUT avoir d'éléments privés
 *   justement car elle n'est pas instancié
 */

abstract class Mammifere {
    public $nom;

    protected $taille;

	// fonction définie, mais non implémenté
    protected function manger() {}

    protected function dormir() {
        $duree_sommeil = 8;
    }

    protected function communiquer($message) {
        echo $message;
    }

    // les classe enfant seront obligé d'implémenter la méthode abstraite "marcher"
    public abstract function marcher($lieu);
}

/**
 * Cette classe va donc hériter de toutes les propriétés et méthodes de Mammifère
 **/
class Homme extends Mammifere {

    private static $nb_doigts = 20;

    // encapsulation de la variable taille
    public function definir_taille($taille) {
        if ($taille > 1 && $taille < 2.5) {
            $this->taille = $taille;
        }
    }

    public static function get_nombre_doigts() {
        return self::$nb_doigts;
    }

    // on est obligé d'implémenter la méthode abstraite "marcher"
    public function marcher($lieu){}
}

class Chat extends Mammifere {

    public function se_defendre($cible) {

    }

    /**    -- surchage de la méthode dormir --

		Règles de la surcharge :
 		 conservation du nom de la méthode
 	 	 conservation du nombre d'argument (ici zero)
 		 conservation du type de données en retour (ici void)
 		 conservation e la portée d'une méthode (protected)
     */
    protected function dormir() {
        $duree_sommeil = 14;
    }

    // on est obligé d'implémenter la méthode abstraite "marcher"
    public function marcher($lieu){}
}

// instantiation d'une classe et personnalisation
$alan = new Homme();
$alan->marcher("épicerie");
$alan->nom = "Alan";
$alan->definir_taille('1.56');


/*
	// j'ai parfois tendance à créer une classe Db statique
	Db::getInstance()->query('SELECT * FROM users');

	// afin de remplacer l'utilisation actuelle de notre système
	$database = new Database();
	$database->query('SELECT * FROM users');

	// autre exemple d'utilisation du mode static
	Tools::convert_time("22:12");
	Tools::secure_string("<script>alert('test')</script>");
	Tools::getRandom(6,22);

*/

