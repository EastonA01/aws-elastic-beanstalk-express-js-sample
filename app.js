const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my mark I leave on the world, thank you Harvard CS50 for starting me on this journey.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
