const list = (req, res, next) => {
    // let data = '<ul>'
    // for(var i = 0;i<100;i++){
    //     data += `<li>line ${i}</li>`
    // }
    // data += '</ul>'
    // res.send(data) 
    let dataArray = [];
    for (var i = 0; i < 100; i++) {
        dataArray.push('line' + i);
    }
    res.render('list',{
        dataArray
    })
}

exports.list = list;