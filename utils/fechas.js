const {intervalToDuration,getDaysInMonth, getMonth} = require('date-fns');

const comparingDates = {
    start: new Date(2022, 8, 20, 0, 0, 0),
    end: Date.now()
}

function obtenerFechas(){
    let date = intervalToDuration(comparingDates)
    let remain = getDaysInMonth(getMonth(comparingDates.end)+1)-date.days;
    return {
        date,
        remain
    }
}


module.exports = {obtenerFechas}