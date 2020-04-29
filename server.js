const express = require('express')
const app = express()

myDate = () =>{
    let requestAt = new Date().getHours()
    return requestAt < 8 && requestAt > 17
}

app.use(
    myDate()
    ? express.static(__dirname + '/closed')
    : express.static(__dirname + '/public'))
//2eme Methode
// app.use(date = (req, res, next) =>{
//     let requestAt = new Date().getHours();
//     let close = requestAt < 8 && requestAt > 17 
//     !close ? express.static(__dirname + '/closed') : next()
// })
// app.use(express.static(__dirname + '/public'))

app.listen(3000, (err) =>{
    if(err){
        console.log('server is not runnig')
    } else{
        console.log('server is running in port 3000')
    }
})