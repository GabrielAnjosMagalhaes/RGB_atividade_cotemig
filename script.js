var red=0
var green=0
var blue=0




function f_red(r)
{
 document.getElementById("red_value").innerHTML=r;
 red = r
 console.log(`Vermelho é ${red}`)
 
}
function f_green(g)
{
 document.getElementById("green_value").innerHTML=g;
 green=g
console.log(`Verde é ${green}`)
}
function f_blue(b)
{
 document.getElementById("blue_value").innerHTML=b;
 let blue = b 
 blue=b
 console.log(`Azul é ${blue}`)
}

function definir_cor(){
    document.getElementById("quadrado").style.backgroundColor = `rgb(${red},${green},${blue})`;
}

