const http = require('https');
const app = require('./app');
const fs = require('fs');

const port = 44313

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

const server = http.createServer(options, app);

server.listen(port);