const crypto = require('crypto');
const password = 'abc123';


const hash = crypto
    .createHash('md5')
    .update(password,'utf-8')
    .digest('hex');

console.log(hash);