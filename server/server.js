const http = require('http');
const fs = require('fs');

const PORT = 3000;
const FILE = "datos.txt";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // Página principal
    if (req.url === "/" || req.url === "/menu") {
        return res.end(`
            <h2>Gestor de Archivo TXT</h2>
            <p>Selecciona una opción:</p>
            <button onclick="location.href='/nuevo'">Crear archivo</button><br><br>
            <button onclick="location.href='/sumar'">Añadir texto</button><br><br>
            <button onclick="location.href='/mostrar'">Mostrar contenido</button><br><br>
            <button onclick="location.href='/reemplazar'">Reemplazar archivo</button><br><br>
            <button onclick="location.href='/borrar'">Eliminar archivo</button>
        `);
    }

    // Crear archivo
    if (req.url === "/nuevo") {
        if (!fs.existsSync(FILE)) {
            fs.writeFileSync(FILE, "Archivo creado correctamente.\n");
        }
        return res.end(`
            <h2>Archivo generado</h2>
            <p>Se ha creado un archivo inicial llamado "${FILE}".</p>
            <a href="/menu">Volver al menú</a>
        `);
    }

    // Agregar texto
    if (req.url === "/sumar") {
        const linea = `Registro añadido: ${new Date().toLocaleString()}\n`;
        fs.appendFileSync(FILE, linea);
        return res.end(`
            <h2>Contenido agregado</h2>
            <p>Se añadió la siguiente línea:</p>
            <pre>${linea}</pre>
            <a href="/menu">Regresar</a>
        `);
    }

    // Mostrar contenido
    if (req.url === "/mostrar") {
        if (!fs.existsSync(FILE)) {
            return res.end(`
                <h2>No existe el archivo</h2>
                <p>No hay nada para mostrar.</p>
                <a href="/menu">Volver</a>
            `);
        }

        const texto = fs.readFileSync(FILE, "utf8");
        return res.end(`
            <h2>Contenido del archivo</h2>
            <pre>${texto}</pre>
            <a href="/menu">Volver</a>
        `);
    }

    // Reemplazar archivo
    if (req.url === "/reemplazar") {
        const nuevo = `Archivo reiniciado.\nModificado: ${new Date().toLocaleString()}\n`;
        fs.writeFileSync(FILE, nuevo);
        return res.end(`
            <h2>Archivo reemplazado</h2>
            <p>El contenido fue actualizado:</p>
            <pre>${nuevo}</pre>
            <a href="/menu">Volver al menú</a>
        `);
    }

    // Borrar archivo
    if (req.url === "/borrar") {
        if (fs.existsSync(FILE)) {
            fs.unlinkSync(FILE);
            return res.end(`
                <h2>Archivo eliminado</h2>
                <p>Se eliminó "${FILE}" correctamente.</p>
                <a href="/menu">Volver</a>
            `);
        }

        return res.end(`
            <h2>Error</h2>
            <p>El archivo no existe, por eso no se pudo borrar.</p>
            <a href="/menu">Volver</a>
        `);
    }

    // Ruta no encontrada
    res.end(`
        <h2>404</h2>
        <p>La ruta que intentas usar no existe.</p>
        <a href="/menu">Regresar</a>
    `);
});

server.listen(PORT, () => {
    console.log(`Servidor activo → http://localhost:${PORT}`);
});
