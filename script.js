var css=document.querySelector("h3");
var color1= document.getElementsByClassName("color")[0];
var color2= document.getElementsByClassName("color")[1];
var body=document.getElementsByTagName("body")[0];

function setGradient(){
    body.style.background= "linear-gradient(to top,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
}


// color1.addEventListener("input",setGradient)

// color2.addEventListener("input",setGradient)


