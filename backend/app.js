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

app.get('/', (req, res)=> {
    res.send('Hello World')
})

readdirSync('./routes/').map((route) => app.use('/apiv1/', require('./routes/' + route)))

const server = () => {
    database()
    app.listen(PORT, () => {
        console.log('Hello W', PORT)
    })
}

server()