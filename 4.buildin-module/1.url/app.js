const url = require('url')
const urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
const querystring = require('querystring')

// console.log(url.parse(urlString))//已弃用
console.log(new URL(urlString).searchParams);

const query =  'i2&name=tony&from=北京'
console.log(querystring.parse(query));//已弃用
console.log(new URLSearchParams(query));
