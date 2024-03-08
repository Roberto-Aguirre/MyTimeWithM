import { newFecha } from "./fechas.js";


var time = newFecha;
// console.log(time);

const años = document.createElement("h1");
const meses = document.createElement("h1");
const dias = document.createElement("h1");

const divAños = document.querySelector(".años");
const divMeses = document.querySelector(".meses");
const divDias = document.querySelector(".dias");

console.log(divAños,divMeses,divDias);

años.innerText = `${time.año} ${time.years>1?"mes":"meses"}`
meses.innerText = `${time.meses} ${time.month>1?"mes":"meses"}`
dias.innerText = `${time.dias} ${time.days>1?"mes":"meses"}`

divAños.appendChild(años);
divMeses.appendChild(meses);
divDias.appendChild(dias);

// console.log(años,meses,dias);