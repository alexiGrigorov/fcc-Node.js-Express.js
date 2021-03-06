const { readFile, writeFile } = require('fs').promises;

// Not needed with the fs.promises
// const util = require('util');

// Promise approach
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const setText = (path, data) => {
  return new Promise((resolve, reject) => {
    writeFile(path, data, (err, result) => {
      if (err) {
        reject(err);
      }
      console.log('setText - Done with writing');
      resolve(result);
    });
  });
};

const first = getText('./content/first.txt')
  .then((result) => {
    console.log('getText - ', result);
  })
  .catch((err) => {
    console.error(err);
  });

const second = getText('./content/second.txt')
  .then((result) => {
    console.log('getText - ', result);
  })
  .catch((err) => {
    console.error(err);
  });

Promise.all([first, second])
  .then((values) => {
    setText(
      './content/result-async-promises.txt',
      `This is the combination of : ${values[0]} and ${values[1]}`
    );
  })
  .catch((err) => {
    console.error(err);
  });

// Async-Await approach
// Not needed with the fs.promises
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

(async () => {
  try {
    // Not needed with the fs.promises
    // const first = await readFilePromise('./content/first.txt', 'utf8');
    const first = await readFile('./content/first.txt', 'utf8');
    console.log(`readFilePromise - ${first}`);

    // Not needed with the fs.promises
    // const second = await readFilePromise('./content/second.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(`readFilePromise - ${second}`);

    // Not needed with the fs.promises
    // await writeFilePromise(
    //   './content/result-async-asyncAwait.txt',
    //   `This is the combination of : ${first} and ${second}`
    // );
    await writeFile(
      './content/result-async-asyncAwait.txt',
      `This is the combination of : ${first} and ${second}`
    );

    console.log('writeFilePromise - Done with writing');
  } catch (err) {
    console.error(err);
  }
})();
