console.log(process.platform);
const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

// promises are better than callbacks
app.get('/', async (request, response) => {
    response.send(await readFile('./hello2.txt', 'utf8'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App available on http://localhost:${PORT}`));
// const { readFile, readFileSync } = require('fs');


// const chs = readFileSync('./hello.txt')
// console.log("This is readfileSync: " + chs);

// // callback fn for async-ness
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log("This is readFile: " + txt);
// });

// promise for async-ness

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log("File: " + file);
}

hello();
console.log("Do this ASAP");

const myModule = require('./my-module');
console.log(myModule);
console.log("myModule: " + JSON.stringify(myModule));