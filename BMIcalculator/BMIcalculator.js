var weig=document.getElementById("weight");
var heig=document.getElementById("height");

function calculateBMI(){
    var Mheigh=heig.value/100;
    var calc=weig.value/(Mheigh*Mheigh);
    result.innerHTML=calc.toFixed(2);
}