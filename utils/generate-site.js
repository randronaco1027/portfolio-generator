const fs = requite('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/app.js', './dist/app.js', err => {
            if(err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File copied!'
            })
        })
    })
}

module.exports = { writeFile,copyFile }