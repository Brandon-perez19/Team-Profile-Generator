import { writeFile } from 'fs';

//writes the HTML file based on the templates created in src.
const createFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
}

export {createFile}