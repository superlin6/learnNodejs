const http = require('http');
// const querystring = require('querystring');
// const https = require('https')
const server = http.createServer((req, res) => {

    http.get('http://superlin.xyz:3000/login/status', (result) => {
        let data = '';
        res.writeHead(200, {
            'content-type': 'application/json;charset=utf-8'
        })

        result.on('data', (chunk) => {
            data += chunk
        })
        result.on('end', () => {
            // console.log(data);
            res.write(data);
            res.end(); 
        })
    })


})

server.listen(3000, () => {
    console.log('http://localhost:3000');
})