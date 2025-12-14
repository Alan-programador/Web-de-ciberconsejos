let boton_presentacion = document.getElementById("presentacion");
let boton_malware = document.getElementById("malware");
let boton_consejos = document.getElementById("consejos");
let boton_juego = document.getElementById("juego");
let parte_actual = document.getElementById("presentacion_parte");
let presentacion = document.getElementById("presentacion_parte");
let malware = document.getElementById("malware_parte");
let consejos = document.getElementById("consejos_parte");
let juego = document.getElementById("juego_parte");
let boton_anterior = document.getElementById("presentacion");


function cambiar(parte, boton_nombre){
	if(parte != parte_actual){
	let boton = document.getElementById(boton_nombre);
	parte_actual.style.opacity = "0";
	boton_anterior.style.backgroundColor = "rgb(36, 65, 115)";
	boton.style.backgroundColor = "black";
	boton_anterior = boton;
	setTimeout(() =>{
		parte_actual.style.display = "none";
		parte.style.display = "block";
		parte.offsetHeight;
		parte.style.opacity = "1";
		parte_actual = parte;
	}, 500);
	}
	
}