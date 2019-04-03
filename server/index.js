const http = require('http');

const logger = require('./utilities/logger');

const { handleRequest } = require('./req-handler');

const port = 3001;
const ip = '127.0.0.1';

const server = http.createServer(handleRequest);

server.listen(port, ip, () => logger.appStarted(ip, port));
