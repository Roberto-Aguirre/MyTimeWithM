import { newFecha } from "./fechas.js";
import "./node_modules/jquery/dist/jquery.slim.js"


$(document).ready(function () {
        
var time = newFecha;
// console.log(time);

//Append a divs
$(".años").append(`<h1>${time.año} ${time.years>1?"año":"años"}</h1>`);
$(".meses").append(`<h1>${time.meses} ${time.month>1?"mes":"meses"}</h1>`);
$(".dias").append(`<h1>${time.dias} ${time.days>1?"día":"días"}</h1>`);

});

/* JAVASCRIPT PURO 

const años = document.createElement("h1");
const meses = document.createElement("h1");
const dias = document.createElement("h1");

const divAños = document.querySelector(".años");
const divMeses = document.querySelector(".meses");
const divDias = document.querySelector(".dias");
*/


// console.log(años,meses,dias);