const express = require('express');
const app = express();
const path = require('path');
const { obtenerFechas } = require('./src/utils/fechas')

const { date:{days, months, years}, remain } = obtenerFechas()

const staticPath = '/src/static/styles.css';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/src/static'));
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (req, res) => {
  res.render("index", { days, months, years, remain });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
