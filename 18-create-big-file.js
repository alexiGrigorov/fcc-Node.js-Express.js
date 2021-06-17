// creating a file that is too big for a synchronous reading
const { writeFileSync } = require('fs');
for (let i = 0; i < 1000; i++) {
  writeFileSync('./content/big.txt', `BIG file ${i}\n`, { flag: 'a' });
}
