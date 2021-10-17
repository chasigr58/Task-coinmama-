const express = require('express');
const cors = require('cors');


const app=express();

app.use(cors());

app.listen(4000,()=>{
    console.log('runing on port 4000');
})

app.get('/coins',(req,res)=>{
    res.send('coins and their latest rates')
})