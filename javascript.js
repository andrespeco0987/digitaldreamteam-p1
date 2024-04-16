'use strict';
/* animaciones html imagenes */
window.addEventListener('scroll', () => {
	const images = document.querySelectorAll('.container-sm');
	const paragraphs = document.querySelectorAll('.container-sm p');

	images.forEach((image) => {
		if (isElementInViewport(image)) {
			image.classList.add('animate-slide');
		}
	});

	paragraphs.forEach((paragraph) => {
		if (isElementInViewport(paragraph)) {
			paragraph.classList.add('animate-slide');
		}
	});
});

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/* Codigo formulario */
document.getElementById('contactForm').addEventListener('submit', function (event) {
	event.preventDefault();

	const $nombre = document.getElementById('nombre').value;
	const $apellidos = document.getElementById('apellidos').value;
	const $correo = document.getElementById('correo').value;
	const $codigoPais = document.getElementById('codigoPais').value;
	const $celular = document.getElementById('celular').value;
	const $mensaje = document.getElementById('mensaje').value;

	console.log('Nombre:', $nombre);
	console.log('Apellidos:', $apellidos);
	console.log('Correo electrónico:', $correo);
	console.log('Código de País:', $codigoPais);
	console.log('Número de Celular:', $celular);
	console.log('Mensaje:', $mensaje);

	alert('Su mensaje fue enviado exitosamente.');

	document.getElementById('nombre').value = '';
	document.getElementById('apellidos').value = '';
	document.getElementById('correo').value = '';
	document.getElementById('codigoPais').value = 'null';
	document.getElementById('celular').value = '';
	document.getElementById('mensaje').value = '';
});
