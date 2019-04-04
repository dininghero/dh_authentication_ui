const express = require('express');
const path = require('path');

const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'));

// handles any requests that don't match the ones above
app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

app.listen(port, () => logger.appStarted(port));
