const server = require('./server');
const { PORT } = require('./config');


server.listen(PORT, () => {
    console.log(`TechApp backend running on port ${PORT}`);
});