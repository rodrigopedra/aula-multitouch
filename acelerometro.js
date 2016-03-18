var quadrado = document.getElementById('quadrado');

var moveSombra = function (evento) {
    var x = evento.gamma ? evento.gamma : evento.x * 90;
    var y = evento.beta ? evento.beta : evento.y * 90;
	var aux;
	
	log('acelerometo');
		
	if  ( typeof window.orientation !== 'undefined' &&
		(window.orientation == 90 || window.orientation === -90 ) ) {
		// landscape / deitado
		aux = x;
		x = y;
		y = aux;
	}
    
    quadrado.style.boxShadow = x + 'px ' + y + 'px' + ' 50px #333';
};

if ( window.DeviceOrientationEvent ) {
    window.addEventListener( 'deviceorientation', moveSombra, true );
}
