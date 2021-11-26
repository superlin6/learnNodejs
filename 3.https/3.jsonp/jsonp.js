const http = require('http');

http.createServer((req, res) => {
    let url = req.url;
    console.log(req.url);
    // console.log(new URL(`http://localhost:3000${req.url}`).searchParams.get('cb'));
    let option = new URL(`http://localhost:3000${req.url}`).searchParams.get('cb');//cb的值
    // console.log(option);
    switch (new URL(`http://localhost:3000${req.url}`).pathname) {
        case '/api/data':
            res.write(`${option}('hello world')`);
            break;
        default:
            res.write('page not found');
    }
    res.end();
}).listen(3000)