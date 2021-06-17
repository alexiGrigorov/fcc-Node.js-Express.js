const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

// Using Even Emitter API
const server = http.createServer();
// Class: http.Server extends Class: net.Server that extends Class: EventEmitter
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
