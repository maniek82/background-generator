var cssInputColor = document.querySelector(".cssLine");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");


function setInputInitialValue() {
	cssInputColor.value = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
  };

function setGradient() {
	body.style.background = "linear-gradient(to right,"+color1.value +", "+color2.value+ ")";
	cssInputColor.value = body.style.background+";";
}

setInputInitialValue();
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
	

