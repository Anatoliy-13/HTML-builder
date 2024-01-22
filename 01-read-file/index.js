const path = require('path');
const fs = require('fs');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');

stream.on('error', (error) => {
  console.log('Error', error.message);
});
stream.on('data', (chunk) => {
  console.log(chunk);
});
