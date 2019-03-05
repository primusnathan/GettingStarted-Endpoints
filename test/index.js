const express = require('express');
const app = express();

app.get('/',function(request, respone){
    respone.send("Halo world")
})
app.listen('1010')