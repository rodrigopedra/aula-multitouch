(function () {
	var elemento = document.querySelector('#tocavel-hammer');
	var saida = document.querySelector('#saida-hammer');

	var hammertime = new Hammer(elemento);

	hammertime.on('tap', function(ev) {
		saida.textContent = 'tap';
	});
	
	hammertime.on('doubletap', function(ev) {
		saida.textContent = 'doubletap';
	});

	hammertime.on('pan', function(ev) {
		saida.textContent = 'pan';
	});

	hammertime.on('press', function(ev) {
		saida.textContent = 'press';
	});

	hammertime.on('swipe', function(ev) {
		saida.textContent = 'swipe';
	});
})();