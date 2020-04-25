var slideIndex=1;/*Una matriz o array es un conjunto ordenado de valores al que se refiere con ... var*/

mostrarSlides(slideIndex);



function mostrarSlides(n) {
	// body...
	var i;/*declara una variable*/
	var slides = document.getElementsByClassName("miSlider");/*declara una variable (slides) yse le 
	asignan todos los elementos con el nombre "miSlider"*/
	var puntitoS = document.getElementsByClassName("puntito")/*declara una variable (puntitoS) yse le 
	asignan todos los elementos con el nombre "puntito"*/

	if (n>slides.length) {slideIndex=1;}/*Le esta indicando que si n es mayor a la variale slides se cumple 
	la condicion*/
	if (n<1) {slideIndex=slides.length;}/*Si n es menor al (slideIndex 1) y asignandole los valores de slides*/
	for (i = 0; i < slides.length; i++){/*si la variable 1es iguala 0 y menor a (slides.lenght) incrementar 1*/
		slides[i].style.display="none";
	}

	for (i = 0; i < puntitoS.length; i++){/*si la variable 1es iguala 0 y menor a (puntitoS.lenght) 
		incrementar 1*/
		puntitoS[i].className= puntitoS[i].className.replace(" activo", "");
	}
	slides[slideIndex-1].style.display="block";
	puntitoS[slideIndex-1].className+=" activo";
}

function plusSlides(n) {
	// body...
	mostrarSlides(slideIndex+=n);/*mostrarlos slides mientras sea mayor o igual a n*/
}

function currentSlide(n) {
	// body...
	mostrarSlides(slideIndex=n);/*mostrarlos slides mientras sea igual a n*/
}