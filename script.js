var cssInputColor = document.querySelector(".colorInput");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var copyButton = document.querySelector(".copyButton");


function setInputInitialValue() {
	cssInputColor.value = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
  };

function setGradient() {
	body.style.background = "linear-gradient(to right,"+color1.value +", "+color2.value+ ")";
	cssInputColor.value = body.style.background+";";
}

function copyColorFromInput() {
	var color = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ");"
	cssInputColor.select();
	document.execCommand("copy");
	console.log("Your color: " + color);
	alert("Your picked color is: "+ color);
	copyButton.textContent = "Copied";
  
	setTimeout(() => {
	  cssInputColor.blur();
	  copyButton.textContent = "Copy Code";
	}, 2000);
  };
  
setInputInitialValue();
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
copyButton.addEventListener("click",copyColorFromInput);
	

