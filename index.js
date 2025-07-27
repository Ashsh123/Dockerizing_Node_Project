const express = require('express');

const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.get('/', (req,res)=>{
    res.json({mesage:"Hello server"})
})

app.listen(process.env.PORT ,()=>{
    console.log('server created successfully...');
})