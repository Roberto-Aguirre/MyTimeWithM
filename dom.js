import { newFecha } from "./fechas.js";


var time = newFecha;
console.log(time);


const años = document.createElement("h1");
const meses = document.createElement("h1");
const dias = document.createElement("h1");

años.innerText = `${time.año} ${time.years>1?"mes":"meses"}`
meses.innerText = `${time.meses} ${time.month>1?"mes":"meses"}`
dias.innerText = `${time.dias} ${time.days>1?"mes":"meses"}`

document.body.append(años,meses,dias);

console.log(años,meses,dias);