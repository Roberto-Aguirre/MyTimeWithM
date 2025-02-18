const express = require('express');
const app = express();
const path = require('path');
const { obtenerFechas } = require('./utils/fechas')

const { date:{days, months, years}, remain } = obtenerFechas()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  res.render("index", { days, months, years, remain });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
