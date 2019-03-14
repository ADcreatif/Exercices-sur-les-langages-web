## html

    --> Si on remarque que les balises prennent la forme caractéristique en escalier c'est qu'on a oublié de fermer une balise

## javascript

    Uncaught TypeError: Cannot read property '260' of undefined
    --> Il y a de très grandes chances que vous n'ayez pas défini l'object ou le tableau dont l'index est '260'
    	MonTableau = new Array(); ou bien new Object();

    Unexpected token 'balblalbalbal'
    --> Remontez la ligne précédente vous avez oublié de fermer une } ) ] ou d'ajouter un ;



### jQuery
il existe 4 sélecteurs jquery

 - ``$('.generic-form input')``                     _identification par sélecteur css_
 - ``$(document)``                                  _identification d'un élément du DOM_
 - ``$(function(){ /* le DOM est chargé */ })``     _s'execute quand le DOM est chargé ('DOMContentLoaded' en JS natif)_
 - ``$('<li>')``                                     _crée une balise qu'on insèrera plus tard dans le DOM avec .append()_


## php

    syntax error, unexpected 'quelquechose'
    --> vous avez oublié un ";" à la ligne précédente

    syntax error, unexpected end of file
    --> Une acolade n'a pas bien été fermée (fermer un if ou une function par exemple)

    udefined index 'quelquechose'
    --> vous chezchez une clé qui n'existe pas dans un tableau - $tableau['quelquechose'] -

    Use of undefined constant variable - assumed 'variable'
    --> n'oubliez pas le '$' devant les variables


## Différences JS / PHP

|                            |         PHP         |          JS         |
|----------------------------|---------------------|---------------------|
|  s'éxécute sur             |      serveur        |   client HTML       |
|  déclaration des variables |         $           |       var           |
|  la concaténation          |         .           |        +            |
|  tableau associatifs       |  ['key' => value]   |   {key : value}     |
|  le point virgule ";"      |     obligatoire     |       optionnel     |
|  guillemet simple / double |     "$prenom"       |        ''           |

### entre .php / .phtml ###

|                 |      .PHP       |       .PHTML      |
|-----------------|-----------------|-------------------|
| présence html   |  pas de html    | quasi que du html |
| présence php    |  quasi que php  |  très peu de php  |
| fermeture ?>    |  jamais         |  très fréquent    |

### les rêgles du .phtml ####

- ouverture/fermeture du php à chaque lignes
- indentation du code comme du html
- syntaxe alternative pour les echo <?= "salut" ?>  <=> <?php echo "salut" ?>
- syntaxe alternative pour les autres structures foreach(): (...) endforeach;


## Astuces Déboguage ##
    pour les eventListeners console > elements > event listeners
    pour les données GET et POST : console > network > "votre script" > header
    pour un script ajax : console > network > (rubrique XHR) > preview pour afficher les erreurs renvoyés par php


## PRINCIPES DE POO ##
[https://fr.wikipedia.org/wiki/Patron_de_conception]

- **l'encapsulation** : regroupement et sécurisation de propriétés au sein d'une même méthode ``get_width(){return $this->width}``
- **la composition** : composer un objet avec un autre objet et ajoute des propriétés optionelle à un object
- **scope, portée ou niveau de visibilité** (public, protected, private)
- **l'héritage** : donne accès à des propriétés et méthodes du parent, et permet leur extention
- **le polymorphisme** : même méthode pour différent types de classes
- **l'abstraction**: pas de membres privés, pas d'instance possible, peut déclarer des méthodes abstaites,
- **la surchage** : extension d'une méthode en respectant son nom, sa portée, ses arguments et le type de la valeur de retour


## SQL ##

### les indexes ###
- index - permet la recherche sur la clé
- unique - doit être unique dans la table
- primaire - doit être unique, un seul par table, autoincrémentable
- foreign (etrangère) - liée avec une clé dans une autre table. Elle doit être de même type que l'index associé (int par ex)

### ordre d'execution d'un select
    5- SELECT / AS
    1- FROM 
    2- JOIN / ON
    3- WHERE / IN / BETWEEN / LIKE / NOT / OR / AND ...
    4- GROUP BY
    6- HAVING
    7- ORDER BY
    8- LIMIT


