<?php

/*
 * - Une classe abstraire NE PEUT ÊTRE INSTANCIE
 * - l'autre intérèt d'une classe abstraite c'est de connaitre
 *   les méthode de ses enfants sans forcément les définir
 * - une classe abstraite de NE PEUT avoir d'éléments privés
 */

abstract class Mammifere {
    public $nom;

    protected $taille;

    protected function manger() {

    }

    protected function dormir() {
        $duree_sommeil = 8;
    }

    protected function communiquer($message) {
        echo $message;
    }

    // on est obligé d'implémenter la méthode abstraite "marcher"
    public abstract function marcher($lieu);
}


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

    /* surchage de la méthode dormir
     * on conserve le nom de la méthode
     * on conserve le nombre d'argument (ici zero)
     * on conserve le type de données en retour (ici void)
     * on conserve la portée d'une méthode
     */
    protected function dormir() {
        $duree_sommeil = 14;
    }

    // on est obligé d'implémenter la méthode abstraite "marcher"
    public function marcher($lieu){}
}

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

