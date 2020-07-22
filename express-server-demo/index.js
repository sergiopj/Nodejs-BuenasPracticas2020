const express = require('express');
const server = express();

const { NotFoundMiddleware } = require('./middlewares');


server.use(express.static('./public'));
server.use(express.json());

// route and use middleware
server.use('/', HomeController );
// cuando no existe la ruta se ejecuta el middleware
server.use(NotFoundMiddleware);


server.listen(8081, () => {
    console.log('Sever running in port 8081')
})