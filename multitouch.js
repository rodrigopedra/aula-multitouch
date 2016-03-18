var tocavel = document.getElementById('tocavel');
var saida = document.getElementById('saida');

var respondeToque = function ( evento ) {
    var frases = [];
    
    saida.innerHTML = '';

    if ( evento.touches.item(0) == evento.targetTouches.item(0) ) {
        frases.push('Você tocou aqui!');
    }

    if ( evento.touches.length > 1 ) {
        frases.push('Multitouch!');
    }

    if ( evento.touches.length > 1 && evento.touches.length == evento.targetTouches.length ) {
        frases.push('Vários toques!');
    }
    
    saida.innerHTML = frases.join('<br>');
};

tocavel.addEventListener( 'touchstart', respondeToque, false );
