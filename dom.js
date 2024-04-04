import { newFecha } from "./fechas.js";
import "./node_modules/jquery/dist/jquery.slim.js"


$(document).ready(function () {
        
var time = newFecha;
// console.log(time);

//Append a divs
const {año,meses,dias} = time

$(".años").append(`<h1>${año} ${año>1?"años":"año"}</h1>`);
$(".meses").append(`<h1>${meses} ${meses>1?"meses":"mes"}</h1>`);
$(".dias").append(`<h1>${dias} ${dias>1?"días":"dia"}</h1>`);

});

async ()
setTimeout(()=>{console.log("h");},1000)
/* JAVASCRIPT PURO 

const años = document.createElement("h1");
const meses = document.createElement("h1");
const dias = document.createElement("h1");

const divAños = document.querySelector(".años");
const divMeses = document.querySelector(".meses");
const divDias = document.querySelector(".dias");
*/


// console.log(años,meses,dias);