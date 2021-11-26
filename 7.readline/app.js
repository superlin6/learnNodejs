const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('你如何看待nodejs?',(answer)=>{
    console.log(`您的意见是${answer}`);
})