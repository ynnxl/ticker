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
    res.send("Server is Ready");
})
app.get('/api/symbol', (req, res)=> {
    res.send(symbol);
})

const server = () => {
    app.listen(PORT, () => {
        console.log('https://localhost:', PORT)
    })
}

server()

//readdirSync('./routes/').map((route) => app.use('/api', require('./routes/' + route)))

const finnhub = require('finnhub');

async function getSymbolPrice(symbol){
    try{
        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = process.env.API_KEY;
        const finnhubClient = new finnhub.DefaultApi();
        finnhubClient.quote(symbol,(err,data,response)=>{
        console.log(data);
        
        });
    }catch(error){
        console.error('error', error);
    }
}

getSymbolPrice('AAPL')



