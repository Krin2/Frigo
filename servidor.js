
var fs=require('fs')
  var data=fs.readFileSync('Q1.json', 'utf8');
  var dato=JSON.parse(data);
  console.log(dato);

  module.exports;
//   const http = require('http')
//   const hostname = './Q1.json'
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   console.log(res);
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World!\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })