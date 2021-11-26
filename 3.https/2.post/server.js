const http = require('http');

http.createServer((req, res) => {
    const postData = JSON.stringify({
        username: 'jack',
        password: 123
    });
    res.writeHead(200, {
        'content-type': 'application/json;charset=utf-8'
    })
    res.end(postData);
    // const options = {
    //     protocol: 'http:',
    //     hostname: 'localhost',
    //     method: 'POST',
    //     port: 3000,
    //     path: '/data',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded'
    //     }
    // };
    // const request = http.request(options, (result) => {
    //     console.log(result);   
    // })
    // request.write(postData);
    // request.end();
    res.end();
}).listen(3000);