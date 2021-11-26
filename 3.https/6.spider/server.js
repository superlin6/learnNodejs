const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

function filterData(data){
    // console.log(data);
    let $ = cheerio.load(data);
    $('.section-item-box p').each((index,el) =>{
        // console.log(index);
        console.log($(el).text());
    })
}
http.createServer((req,res)=>{
    let data = '';
    https.get('https://www.meizu.com',(result)=>{
        result.on('data',(chunk)=>{
            data += chunk;
        })
        result.on('end',()=>{
            filterData(data);
        })
    })
    res.end();
}).listen(3000);