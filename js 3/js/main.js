let sqrdBtn = document.getElementById("square-button");
let sqrinput= document.getElementById("square-input");
sqrdBtn.onclick= function(){
    let number = Math.pow(sqrinput.value,2);
    sqrinput.value=number;
}


let halfbtn= document.getElementById("half-button");
let halfinput= document.getElementById("half-input");
halfbtn.onclick= function(){
    let number = halfinput.value/2;
    halfinput.value=number;
}

let radius = document.getElementById("area-input");
let areabtn= document.getElementById("area-button");
areabtn.onclick=function(){
    radius.value=Math.pow(radius.value,2)*3;
}