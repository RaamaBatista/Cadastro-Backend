const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/models')

const users = require("./controllers/users")
app.use('/',users)
app.listen(8080, ()=>{
    console.log('scdbh')
})