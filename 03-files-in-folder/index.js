const path = require('path');
const { readdir, stat } = require('fs/promises');
const filenames = path.join(__dirname, 'secret-folder');

const showInfo = async (filenames) => {
  try {
    const folder = await readdir(filenames, { withFileTypes: true });

    for (const file of folder) {
      if (file.isFile()) {
        const fileName = file.name;
        const name = fileName.split('.')[0];
        const extension = path.extname(fileName).slice(1);
        const size = (await stat(path.join(filenames, fileName))).size;
        console.log(`${name} - ${extension} - ${size} bytes`);
      }
    }
  } catch (error) {
    console.error('error');
  }
};

showInfo(filenames);
