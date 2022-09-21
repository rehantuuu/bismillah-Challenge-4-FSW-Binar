const http = require('http');
const { PORT = 8000 } = process.env;

const fs = require('fs');
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'UTF-8');
}

function getCSS(cssFileName) {
    const cssFilePath = path.join(PUBLIC_DIRECTORY, cssFileName);
    return fs.readFileSync(cssFilePath, 'UTF-8');
}

function onRequest(req, res) {

    if (req.url.match('.css$')) {
        CSS = req.url;

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(getHTML('mulai.html'));
            return;

        case '/cars':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(getHTML('carimob.html'));
            return;

        default:
            res.writeHead(404);
            res.end(getHTML('404.html'));
            break;
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
    console.log('server sudah berjalan, silahkan buka http://localhost:%d', PORT);
});
