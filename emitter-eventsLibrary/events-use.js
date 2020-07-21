// emitter nativo de node js, mejor usar este que uno custom nuestro
const { EventEmitter } = require('events');
const { SAVE } = require('./event-names');
 

const emitter = new EventEmitter();



emitter.on(SAVE, () => {
    console.log('On save event activated 1');
});


emitter.on(SAVE, () => {
    console.log('On save event activated 2');
});




// con esto se emite el evento y se disparan las funciones superiores
emitter.emit('save');
