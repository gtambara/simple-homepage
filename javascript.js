function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


// definindo qual o padrão de cor a ser usado nessa inicialização
var caso = getRandomInt(0,3)

var thcount = document.getElementsByTagName("TH").length;

var tdcount = document.getElementsByTagName("TD").length;

switch(caso){

	case 0://caso AZUL
		document.getElementsByTagName("H1")[0].classList.add("tituloblue");

		for(i=0; i<thcount; i++){
			document.getElementsByTagName("TH")[i].classList.add("thblue");
		}

		var trcount = document.getElementsByTagName("TR").length;
		for(i=1; i<trcount; i=i+2){
			document.getElementsByTagName("TR")[i].style.backgroundColor = "#ccf2ff";
		}

		var tdcount = document.getElementsByTagName("TD").length;
		for(i=0; i<tdcount; i++){
			document.getElementsByTagName("TD")[i].classList.add("tdblue");
		}
		
		break
	case 1://caso LARANJA
		document.getElementsByTagName("H1")[0].classList.add("tituloorange");

		for(i=0; i<thcount; i++){
			document.getElementsByTagName("TH")[i].classList.add("thorange");
		}

		var trcount = document.getElementsByTagName("TR").length;
		for(i=1; i<trcount; i=i+2){
			document.getElementsByTagName("TR")[i].style.backgroundColor = "rgb(253, 207, 145)";
		}

		var tdcount = document.getElementsByTagName("TD").length;
		for(i=0; i<tdcount; i++){
			document.getElementsByTagName("TD")[i].classList.add("tdorange");
		}

		break

	case 2://caso VERDE
		document.getElementsByTagName("H1")[0].classList.add("tituloverde");

		for(i=0; i<thcount; i++){
			document.getElementsByTagName("TH")[i].classList.add("thverde");
		}

		var trcount = document.getElementsByTagName("TR").length;
		for(i=1; i<trcount; i=i+2){
			document.getElementsByTagName("TR")[i].style.backgroundColor = "rgb(190, 236, 172)";
		}

		var tdcount = document.getElementsByTagName("TD").length;
		for(i=0; i<tdcount; i++){
			document.getElementsByTagName("TD")[i].classList.add("tdverde");
		}

		break

}


