const axios = require('axios');
const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs')

const { database } = require('./database/database');
const app = express()

require('dotenv').config();

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/api', (req, res)=> {
    res.json({message: "Hello World!"});
})

readdirSync('./routes/').map((route) => app.use('/api', require('./routes/' + route)))

const server = () => {
    database()
    app.listen(PORT, () => {
        console.log('https://localhost:', PORT)
    })
}

server()