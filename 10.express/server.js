const app = require('express')();
const express = require('express');
const router = require('./router/index')
const path = require('path');
// const bodyParser = require('body-parser')//已弃用 直接用express.
 

// app.use(()=>{
//     console.log(0);
// })

// app.use(bodyParser.urlencoded({ extends: false }))//express.urlencoded
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('./public'))

app.engine('art', require('express-art-template'));
app.set('views', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');



app.use('/',router)

app.listen(3000, () => {
    console.log('http://localhost:3000');
});