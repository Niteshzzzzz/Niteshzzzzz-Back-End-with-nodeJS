import http from "http";

const server = http.createServer(async (req, res) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("Content-Type", "text/txt");
    res.end('Hii, i am Nitesh.')
})

server.listen(3000, "localhost", () => {
    console.log("Server Started");
  });