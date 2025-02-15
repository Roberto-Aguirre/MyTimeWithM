const datesBeetween = require('date-fns');

const fechas = {
    start: new Date(2022, 8, 20, 0, 0, 0),
    end: Date.now()
}

function obtenerFechas(){
    return datesBeetween.intervalToDuration(fechas)
}


module.exports = {obtenerFechas}