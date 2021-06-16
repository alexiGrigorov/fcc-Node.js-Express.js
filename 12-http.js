const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our Home Page');
    res.end();
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can be able to find the page that you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000);
