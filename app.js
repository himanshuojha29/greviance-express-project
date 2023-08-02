const express = require('express')
// console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectdb = require('./db/connectdb')

// view engine ejs
app.set('view engine', 'ejs')

// for image and css
app.use(express.static('public'))

// dbconnection
connectdb();

//router load

app.use('/',web)






// server creat
app.listen(port, () => {
    console.log(`server is runing local host: ${port}`)
  })