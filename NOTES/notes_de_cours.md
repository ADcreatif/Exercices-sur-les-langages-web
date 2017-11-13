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

 - ``$('.generic-form input')``                     _identification par sélécteur css_
 - ``$(document)``                                  _identification d'un élément du DOM_
 - ``$(function(){ /* le DOM est chargé */ })``     _s'execute quand le DOM est chargé ('DOMContentLoaded' en JS natif)_
 - ``$('<li>)``                                     _crée une balise qu'on insèrera plus tard dans le DOM avec .append()_


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

|                      |         PHP        |          JS         |
|----------------------|--------------------|---------------------|
|  s'éxécute sur       | serveur            |   client HTML       |
|  les variables       |    $               |       var           |
|  la concaténation    |    .               |        +            |
|  tableau associatifs |   ['key' => val]   |        {key : val}  |
|  le ";"              |  obligatoire       |       optionnel     |
|  guillemet simple    |  "$prenom"         |        ''           |

### entre .php / .phtml ###

|                 |      .PHP       |       .PHTML      |
|-----------------|-----------------|-------------------|
| présence html   |  pas de html    | quasi que du html |
| présence php    |  quasi que php  |  très peu de php  |
| fermeture ?>    |  jamais         |  très fréquent    |

### les rêgles du .phtml ####

 - on indente le php comme le html
 - a chaque ligne on réouvre et on referme le <?php  ?>
 - écriture simplifié des instructions ``<?php if(): ?> <?php endif ?>``  ou encore ``<?= 'blablabla'  ?>`` à la place de ``<?php echo 'blablabla' ?>``)


## Astuces Déboguage ##
    pour les eventListeners console > elements > event listeners
    pour les données GET et POST : console > network > "votre script" > header
    pour un script ajax : console > network > (rubrique XHR) > preview pour afficher les erreurs renvoyés par php


## PRINCIPES DE POO ##
[https://fr.wikipedia.org/wiki/Patron_de_conception]

- **l'encapsulation** : regroupement et sécurisation de propriétés au sein d'une même méthode ``get_width(){return $this->width}``
- **scope, portée ou niveau de visibilité** (public, protected, private)
- **l'héritage** : donne accès à des propriétés et méthodes du parent
- **la composition** : composer un objet avec un autre objet et ajoute des propriétés optionelle à un object
- **la surchage** : extension d'une méthode en respectant son nom, sa portée, ses arguments et le type de la valeur de retour
- **le polymorphisme** : même méthode pour différent types
- **l'abstraction**: pas de membres privés, pas d'instance possible, peut déclarer des méthodes abstaites,


## SQL ##

### les indexes ###
- index - permet la recherche sur la clé
- unique - doit être unique dans la table
- primaire - doit être unique, un seul par table, autoincrémentable
- foreign (etrangère) - liée avec une clé dans une autre table. Elle doit être de même type que l'index associé (int par ex)


