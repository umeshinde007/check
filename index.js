const express = require('express')
require('dotenv').config()
const app = express()


const Port=process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/paras',(req,res)=>{
    res.send('hell parasram')

})
app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})