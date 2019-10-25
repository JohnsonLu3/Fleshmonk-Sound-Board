const http = require('http');
const app = require('./app');
const fs = require('fs');

const port = 8080

// const options = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem')
// };

const server = http.createServer(app);


server.listen(port);