const mongoose = require('mongoose');
const { Schema } = mongoose;


const BreakingNewSchema = new Schema({
    title: {type: String},
    link: {type: String},
}, {timestamps: {createdAt: true, updatedAt: true}}); // añade sendos timestamp en el modelo al insertar data


module.exports = mongoose.model('BreakingNew', BreakingNewSchema);