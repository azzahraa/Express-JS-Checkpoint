const express = require ('express')
const datetime = require('node-datetime')

let dt = datetime.create(new Date());
let day = dt.format('W');
let hour = dt.format('H:M');

const app = express()
app.use(express.static(__dirname + '/Routes'))
app.use(dateTest = (req, res, next)=>{
    if(hour>"09:00" && hour< "17:00"){
        if(
            day !="sunday"  &&  day !="saturday"
         ){
              res.sendFile(__dirname + "/Routes/home.html")
         }
        else{
            res.sendFile(__dirname + "/Routes/err.html")
        }
    }
    next()
})

app.listen(5000, (err)=>{
    if (err)
        throw(err)
    else console.log('Server Running')
})