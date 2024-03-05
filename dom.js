import { fechasDiferencias } from "./logica";

console.log(fechasDiferencias);

const años = document.createElement("h1");
const meses = document.createElement("h1");
const dias = document.createElement("h1");

años.innerText = "1 año"
meses.innerText = `${diferencia.month} ${diferencia.month>1?"mes":"meses"}`
dias.innerText = "1 "

document.body.append(años,meses,dias);

console.log(años,meses,dias);