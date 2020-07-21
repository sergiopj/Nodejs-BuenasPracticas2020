const http = require('http');


http.createServer((req, res) => {
    res.write('Welcome user!');
    res.end();
}).listen(8081);


