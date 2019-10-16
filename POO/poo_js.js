"use strict";


///////////////////////////////////////////////////////////////////////////////////
//                        définition d'une classe
///////////////////////////////////////////////////////////////////////////////////

// voici le constructeur de classe
var Voiture = function () {

    // définition des propriétés de l'objet Voiture
    this.marque = "Fiat";
    this.color = "rose";
    this.dateAchat = new Date('2017-05');
    this.options = ['abs', 'vitre electriques', 'fermeture centralisée'];
    this.direction = 0;

};

// définition de la méthode klaxonne de l'objet Voiture;
Voiture.prototype.klaxonne = function () {
    var klaxonne_mp3;
    klaxonne_mp3.play();
};

Voiture.prototype.ajoutOption = function (nouvelle_option) {
    this.options.push(nouvelle_option);
};

Voiture.prototype.tourner = function (angle) {
    this.direction += angle;
};


///////////////////////////////////////////////////////////////////////////////////
//                       utilisation de la classe
///////////////////////////////////////////////////////////////////////////////////

// instanciation
var ma_super_voiture = new Voiture();
ma_super_voiture.marque = "Peugeot";

var ma_voiture_pourie = new Voiture();
ma_voiture_pourie.color = "cacabouda perlé";

ma_voiture_pourie.klaxonne();


ma_voiture_pourie.ajoutOption('clim');


// constructeur (ou définition de la classe)
var MaClasse = function () {

};

////////////////////////////////////////////////////////////////

// création d'une instance de classe
var bidule = new MaClasse();


var kebab;

kebab = new Array();
kebab.push('salade', 'tomate', 'oignon');


kebab = ['salade', 'tomate', 'oignon'];
























