const app = require('express')();
const express = require('express');
const router = require('./router/index')
// const bodyParser = require('body-parser')//已弃用 直接用express.


// app.use(()=>{
//     console.log(0);
// })

// app.use(bodyParser.urlencoded({ extends: false }))//express.urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/',router)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});