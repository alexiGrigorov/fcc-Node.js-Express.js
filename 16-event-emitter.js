const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

// the order of callbacks and event emits matters
customEmitter.emit('response');

// it is possible to have two callbacks for the same event
customEmitter.on('response', () => {
  console.log(`some other logic`);
});

// possible to pass arguments to the callback
customEmitter.emit('response', 'Alexi', 34);
