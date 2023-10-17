const express = require('express');
const dotenv = require("dotenv")

const app = express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send('starting api 5000')
})
app.get('/api/chats',(req,res)=>{
    res.send('chat page')
})


PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Api runnning now on port ${PORT}`))