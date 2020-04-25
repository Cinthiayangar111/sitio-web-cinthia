var miMenuDesplegable, miMenuDesplegable2;

function mostrar(){/*La funcion al darle click al boton*/
	// body...
	document.getElementById('miMenu').classList.toggle("mostrar");/*se le 
	asignan todos los elementos con el nombre "miMenu"*/
	document.getElementById('miMenu').classList.remove("mostrar");/*se le 
	asignan todos los elementos con el nombre "miMenu"*/
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDesplegable=document.getElementById('miMenu');/*Se le asignan todos los elementos del id con 
	el nombre "Mi menu2" a "miMenuDesplegable2"*/
		if (miMenuDesplegable.classList.contains('mostrar')) {
			miMenuDesplegable.classList.remove("mostrar");
		}
	}
}

function mostrar2(){/*La funcion al darle click al boton*/
	// body...
	document.getElementById('miMenu2').classList.toggle("mostrar");/*se le 
	asignan todos los elementos con el nombre "miMenu"*/
	document.getElementById('miMenu').classList.remove("mostrar");/*se le 
	asignan todos los elementos con el nombre "miMenu"*/
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDesplegable2=document.getElementById('miMenu2');/*Se le asignan todos los elementos del id con 
	el nombre "Mi menu2" a "miMenuDesplegable2"*/
		if (miMenuDesplegable2.classList.contains('mostrar')) {
			miMenuDesplegable2.classList.remove("mostrar");
		}
	}
}
