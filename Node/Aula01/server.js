import http from 'http';

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>buenas</h1>");
});

server.listen(port, hostName, () => {
    console.log(`Server rodando na porta http://${hostName}:${port}/`);
})