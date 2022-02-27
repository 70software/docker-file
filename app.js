const express = require('express');


const PORT = 8000;
const HOST = 'localhost';

const app = express()

app.get('/helloworld', (req, res)=>{
    let name = req.query['name'];
    if(name) {
        res.send("Hello >" + name + "!");
        console.log("parameter name: " + name + " entered.");
    }
    else {
        res.send("Hello world!");
        console.log("parameter name is empty!");
    }
})
app.listen(PORT, HOST);
    console.log(`Run api on http://${HOST}:${PORT}`);

