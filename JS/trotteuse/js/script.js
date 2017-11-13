'use strict';

/*************************************
	initiatialisation des variables
**************************************/
var compteur;
var clock = {
	'hand' : {},
	'time' : {
		hours:0,
		minutes:0,
		seconds:0,
		hundredth:0,
	}
};



/*************************************
		fonctions principale
**************************************/
function chrono(){
	// création des aliases
	var t = clock.time;
	var h = clock.hand;
	
	t.hundredth++; 
	
	//si les dixièmes > 9,  on les réinitialise à 0 et on incrémente les secondes de 1
	if (t.hundredth > 99){
		t.hundredth = 0;
		t.seconds ++;
	}		
	
	//si les secondes > 59, on les réinitialise à 0 et on incrémente les minutes de 1
	if (t.seconds > 59){
		t.seconds = 0;
		t.minutes ++
	}

	//on affiche les dixièmes
	//h.hundredth.textContent =" "+t.hundredth;
	h.hundredth.style.transform='rotate('+ timeToDegree(t.hundredth, 100) +'deg)';
	
	//on affiche les secondes
	//h.seconds.textContent =" "+t.seconds;
	h.seconds.style.transform='rotate('+ timeToDegree(t.seconds, 60) +'deg)';
	
	//on affiche les minutes
	//h.minutes.textContent =" "+t.minutes;
	h.minutes.style.transform='rotate('+ timeToDegree(t.minutes, 60) +'deg)';
	
}

function onClickToggleStartPause(){
	if(this.id == 'start'){
		compteur = setInterval(chrono,10);
		this.id = 'pause';
		this.textContent = 'Pause';
	} else {
		clearInterval(compteur);
		this.id = 'start';
		this.textContent = 'Start';
	}
}

//fonction qui remet les compteurs à 0
function onClickResetTimer(){ 
	clearTimeout(compteur);
	
	// remise en place des aiguilles
	clock.hand.minutes.style.transform = "rotate(0deg)";
	clock.hand.seconds.style.transform = "rotate(0deg)";
	clock.hand.hundredth.style.transform = "rotate(0deg)";
}




/*************************************
			demarrage
**************************************/

document.addEventListener('DOMContentLoaded', function(){
	
	//récupération des aiguilles
	clock.hand.hours = document.querySelector('#clock .hand.hours');
	clock.hand.minutes = document.querySelector('#clock .hand.minutes');
	clock.hand.seconds = document.querySelector('#clock .hand.seconds');
	clock.hand.hundredth = document.querySelector('#clock .hand.hundredth');
	
	// gestion des boutons
	createEventHandler('click', '#start', onClickToggleStartPause)
	createEventHandler('click', '#reset', onClickResetTimer);
	
});
