// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// http.createServer((req, res) => {
//     res.write("Hello this is server");
//     res.end();
// }).listen(4500);

// const colors = require('colors');
// console.log('Hello World'.green);

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
// console.log("hi nodemon");

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
// for(i=0;i<4;i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt', 'Hello World');
// }

fs.readdir(dirPath, (err, files) => {
    // console.warn(files);
    files.forEach((item)=>{
        console.log(item);
    })
})