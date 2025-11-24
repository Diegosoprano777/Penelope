const http=require('http');
const server=http.createServer((req,res)=>{
    if (req.url==='/' && req.method==='primero') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Hola mi ñero\n');
    } else if (req.url==='/about' && req.method==='segundo') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Acerca de mi ñero\n');
    } else if (req.url==='/contact' && req.method==='tercero') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Contacto mi ñero\n');
    } else if (req.url==='/services' && req.method==='cuarto') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('Servicios mi ñero\n');
    } 
});
const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`el servidor esta corriendo en http://localhost:${PORT}/`);
});
