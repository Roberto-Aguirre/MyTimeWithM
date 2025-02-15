const express = require('express');
const app = express();
const path = require('path');
const fechas = require('./utils/fechas')

const {days,months,years} = fechas.obtenerFechas()
// Serve static files (CSS, JS, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/', (req, res) => {
  res.send(`${days}+${months}+${years}`)
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
