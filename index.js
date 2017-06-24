// content of index.js
const http = require('http')  
const fs = require('fs')
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  var filePath = '.' + request.url;
  var file = fs.readFileSync(filePath)
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(file);
  //response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})