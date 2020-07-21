const Emitter = require('./emitters');

const emitter = new Emitter();


emitter.on('save', () => {
    console.log('On save event activated 1');
});


emitter.on('save', () => {
    console.log('On save event activated 2');
});




// con esto se emite el evento y se disparan las funciones superiores
emitter.emit('save');