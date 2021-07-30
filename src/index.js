const express = require('express');//gives you access to the express library by searching your node_modules for "express"
const app = express();//creates an instance of the express constructor, which we will name "app"
const port = 3000;


app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on ${port}`);
});
