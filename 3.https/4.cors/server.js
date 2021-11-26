const http = require('http');

http.createServer((req, res) => {
    let data = '';
    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8',
        'access-control-allow-origin': '*'
    });
    res.write('{"data":123}');
    res.end();
}).listen(3000);