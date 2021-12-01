const express = require('express');
const list = require('../controller/index').list

//路由中间件
const router = express.Router();

// console.log(router);
router.get('/',(req,res,next) => {
    res.send('hello');
})
router.get('/',(req,res,next) => {
    res.send('world');
})
router.get('/index',(req,res,next) => {
    const query = req.query;
    res.send(query);
    // res.json(query);//都可以
})

router.post('/index',(req,res,next) => {
    const data = req.body;
    console.log(data);
    res.send(data);
})

router.put('/index',(req,res,next)=>{
    const data = req.body;
    console.log(data);
    res.send(data);
})

router.get('/api/list',list)

module.exports = router;