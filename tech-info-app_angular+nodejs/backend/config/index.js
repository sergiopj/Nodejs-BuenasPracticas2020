if(process.env.NODE_ENV !== 'production') {
    // se le puede pasar un pth a .config, pero por defecto ya conoce ./config
    require('dotenv').config();
}


module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
};