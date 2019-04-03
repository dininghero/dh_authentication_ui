const { serveFile } = require('./models');

exports.handleRequest = (req, res) => {
  const { method, url } = req;

  console.log(`request: ${method} ${url}`);

  let filePath = url;
  if (filePath === '/') {
    filePath = '/index.html';
  }

  if (method === 'GET') {
    if (url === '/' || url === '/main.js' || url === '/vendor.js' || url === '/favicon.ico') {
      serveFile(res, filePath);
    } else {
      res.writeHead(404);
      res.end('404 - Page Not Found');
      res.end();
    }
  } else {
    res.writeHead(405);
    res.end('405 - Method Not Allowed');
    res.end();
  }
};
