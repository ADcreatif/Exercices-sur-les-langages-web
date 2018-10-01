
// cr�ateur d'�couteurs d'�v�nement universel

/**
 * Cette fonction fait un truc
 * @param trigger int poil
 * @param targetSelector array truc
 * @param callback blabla
 */
function createEventHandler(trigger, targetSelector, callback){
	var domElement = document.querySelector(targetSelector);
	domElement.addEventListener(trigger, callback);
}

// converti le temps en degr�� pour l'adapter � la trotteuse.
function timeToDegree(time,max){
	return Math.round(time*360/max) ;
}