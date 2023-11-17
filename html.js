const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html><html><body><h1>This is HTML</h1></body></html></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
