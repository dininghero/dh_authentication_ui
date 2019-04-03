const express = require('express');

const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'));

app.listen(port, () => logger.appStarted(port));
