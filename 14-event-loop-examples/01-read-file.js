const { readFile, readFileSync } = require('fs');

console.log('starting the first async task');

// file path from __dirname
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
  console.log('completed the async task');
});

console.log('starting next sync task');

console.log(readFileSync('./content/second.txt', 'utf-8'));

console.log('completed the sync task');
