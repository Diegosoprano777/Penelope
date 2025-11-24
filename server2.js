const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.setHeader('content-type','text/plain');
    res.write('hola mi ñero\n');
    res.end('buena mi ñero!\n');
});
const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`el servidor esta corriendo en http://localhost:${PORT}/`);
}); 

