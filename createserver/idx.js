const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('/home/linuxlite/CURSOS/NODEJS/Nodejs-training/createserver/index.html');


http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(html);
    res.end();
}).listen(8081);


