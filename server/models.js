const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.ico': 'image/x-icon',
};

exports.serveFile = (response, fileName) => {
  const extname = path.extname(fileName);
  const contentType = mimeTypes[extname];

  const fileStream = fs.createReadStream(path.join(__dirname, `../dist/${fileName}`), 'utf8');
  response.writeHead(200, { 'Content-Type': contentType });
  fileStream.pipe(response);
};
