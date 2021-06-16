const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;

    writeFile(
      './content/result-async.txt',
      `This is the combination of : ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('done with reading and writing');
      }
    );
  });
});

console.log('ready to continue execution');
