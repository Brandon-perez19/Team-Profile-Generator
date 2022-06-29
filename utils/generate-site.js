import { writeFile } from 'fs';

const createFile = (fileContent) => {
    console.log("create file method was called")
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