
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
	'use strict';

	console.log('Hello World!');
	var h1 = document.createElement('h1');
	h1.textContent = 'I love JavaScript';
	var img = document.createElement('img');
	img.src = 'assets/javascript.png';
	img.alt = 'JavaScript Logo';
	document.body.append(h1);
	document.body.append(img);

})();
