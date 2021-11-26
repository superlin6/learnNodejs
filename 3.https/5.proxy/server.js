const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const server = http.createServer((req,res)=>{
    let url = req.url;
    if(/^\/ajax/.test(url)){
        console.log(url);
        const proxy = createProxyMiddleware('/ajax',{
            target: 'http://superlin.xyz:3000/login/status',
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
        })
        proxy(req,res);
    }else{
        console.log('error');
    }
    // res.end();
})
server.listen(3000);