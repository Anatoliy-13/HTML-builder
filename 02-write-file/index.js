const path = require('path');
const fs = require('fs');
const { stdin, stdout } = require('process');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hello! Please enter text:\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  } else {
    writeStream.write(data.toString());
  }
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Text added, thanks!\nGood luck!'));
