const http = require('http');
const server = http.createServer((req, res) => {

  res.end('buena mi ñero!\n');
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`el servidor esta corriendo en http://localhost:${PORT}/`);
});
