const fs = require('fs');
const path = require('path');
const copyFrom = path.join(__dirname, 'files');
const copyTo = path.join(__dirname, 'files-copy');

async function copyDirectory() {
  try {
    await fs.promises.rm(copyTo, {
      recursive: true,
      force: true,
    });
    await fs.promises.mkdir(copyTo, {
      recursive: true,
    });
    const filesData = await fs.promises.readdir(copyFrom);

    filesData.forEach((file) => {
      fs.promises.copyFile(path.join(copyFrom, file), path.join(copyTo, file));
    });
    console.log('Folder is copied');
  } catch (error) {
    console.log('error');
  }
}
copyDirectory();
