let counter = 0;
setInterval(() => {
  console.log(`${counter++}`);
}, 2000);
console.log('I will run first');
// process stays alive unless
// Kill Process Ctrl + C
// unexpected error
