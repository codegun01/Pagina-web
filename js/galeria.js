
var images = ["img/productos/image_1.jpg","img/productos/image_2.jpg","img/productos/image_3.jpg"
			,"img/productos/image_4.jpg","img/productos/image_5.jpg","img/productos/image_6.jpg"];


var num = 0;
function sig(){
	var slider =
	document.getElementById('slider');
	num++;
	if (num >= images.length) {
		num = 0;
	}

	slider.src = images[num];
} 

function ante(){
	var slider =
	document.getElementById('slider');
	num--;
	if (num < 0) {
		num = images.length-1;
	}

	slider.src = images[num];
}

/*----------script de la pagina contacto------------*/


function validar(){

	var form = document.form;

	if (form.nombre.value == '') {
		alert('Ingresa tu nombre');
		form.nombre.value = '';
		form.nombre.focus();
		return false;
	}

	var nom;
	if (form.nombre.value != '') {
		nom = form.nombre.value;
		
	}

	if (!validarEmail(form.email.value)) {
		alert('El correo no es valido');
		form.email.value = '';
		form.email.focus();
		return false;
	}

	if (form.telefono.value == '') {
		alert('Ingresa tu numero de telefono');
		form.telefono.value = '';
		form.telefono.focus();
		return false;
	}

	if (form.fecha.value == '') {
		alert('ingresa tu fecha de nacimiento');
		form.fecha.value ='';
		form.fecha.focus();
		return false;
	}

	if (form.select.value == '') {
		alert('Seleccione su comuna');
		form.select.value = '';
		form.select.focus();
		return false;
	}

	if (form.area.value == '') {
		alert('ingrese su comentario');
		form.area.value = '';
		form.area.focus();
		return false;
	}
}


function validarEmail(email){

	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   	return regex.test(email) ? true : false;
}