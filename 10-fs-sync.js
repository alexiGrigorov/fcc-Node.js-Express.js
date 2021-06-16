const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

const hello = 'hello';

writeFileSync(
  './content/result-sync.txt',
  `This is the combination of : ${first} and ${second}`,
  { flag: 'a' }
);

console.log('done with reading and writing');

console.log('ready to continue execution');
