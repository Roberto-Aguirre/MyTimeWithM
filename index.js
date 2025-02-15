const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html when accessing the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
