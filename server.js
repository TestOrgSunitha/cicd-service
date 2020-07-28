var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Deployed Version is v2.0. I am testing CICD from google cloud build, Please work</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
