const fs = require('node:fs');
const http = require('node:http');
const url = require('node:url');

const data = fs.readFileSync(`${__dirname}/final/dev-data/data.json`, 'utf-8');

//SERVER
const server = http.createServer((req, res) => {
  const {query, pathname} = url.parse(req.url, true);
  console.log(req.url);
  console.log(url.parse(req.url, true));
  //   const pathName = req.url;
  //Over View Page
  if (pathname === '/data') {
    res.writeHead(200, {'Content-type': 'text/html'});

    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Hello World',
    });
    res.end('<h1>Page Cannot be Found!</h1>');
  }

  //   res.end("Hello from the Server!!");
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to requests on port 3000');
});
