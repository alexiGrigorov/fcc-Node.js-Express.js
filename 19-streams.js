// STREAMS
// 4 types - Writeable, Readable, Duplex (reading and writing), Transform (changing while reading or writing)
// streams extend the EventEmitter class

const { createReadStream } = require('fs');

const stream = createReadStream('../content/big.txt', { encoding: 'utf8' });

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });
stream.on('data', (result) => {
  // each buffer is the read data in chunks
  console.log(result);
});
stream.on('error', (err) => {
  console.error(err);
});
