const fs = require('fs');

//----------dir----------
// fs.mkdir('logs', (err) => {
//     err ? console.log('failed') : console.log('success')
// })

// fs.rename('./logs', './log', () => {
//     console.log('changed');
// })

// fs.readdir('./log',(err,result)=>{
//     console.log(result);//[]
// })

//--------file--------
// fs.writeFile('./log.txt', 'hello', (err) => {
//     !err ? console.log('success') : console.log('failed')
// })

// fs.appendFile('./log.txt', ' world', (err) => {
//     !err ? console.log('success') : console.log('failed')
// })

// fs.unlink('./log.txt',(err)=>{
//     !err ? console.log('success') : console.log('failed')
// })

// fs.readFile('./log/log1.log', (err, content) => {
//     console.log(content.toString());
// })

// for(var i = 0;i<10;i++){
//     fs.writeFile(`./log/log-${i}.log`,`log-${i}`,(err)=>{
//     })
// }

// function readDir(dir) {
//     fs.readdir(dir, (err, content) => {
//         content.forEach((value, index) => {
//             let joinDir = `${dir}/${value}`;
//             fs.stat(joinDir, (err, stats) => {
//                 if (stats.isDirectory()){
//                     readDir(joinDir)
//                 } else {
//                     fs.readFile(joinDir,'utf-8', (err, content) => {
//                         console.log(content);
//                     })
//                 }
//             })
//         })
//     })
// }
// readDir('./');

fs.watch('./log /log-0.log', (err, content) => {
    console.log(content.toString());
})