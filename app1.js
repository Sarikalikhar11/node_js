const fs = require('fs');
const path = require('path');
const dirPath=path.join(__dirname, 'crudoperation');
const filePath=`${dirPath}/plane.txt`;

// fs.writeFileSync(filePath,'This is a simple text file');  //create file

// fs.readFile(filePath,'utf8',(err,item)=>{  //read file
//     console.log(item);
// })

// fs.appendFile(filePath,' and file name is plane.txt',(err)=>{   //append file
//     if(err){
//         console.log(err);
//     }
//     console.log('file append');
// })

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {  //update file name
//     if(!err) console.log('file name is updated');
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);  //delete file


