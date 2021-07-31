const express = require('express');//gives you access to the express library by searching your node_modules for "express"
const app = express();//creates an instance of the express constructor, which we will name "app"
const port = 3000;

const bd = [];



app.get('/', function(req,res){
    res.send('Hello World!');
});

app.get('/users', function(req,res){
    let db = bd.map((item)=>({id:item}));
    res.json(db);
});

app.post('/user',(req,res)=>{
    bd.push(bd.length);
    let user = {id:bd[bd.length-1]}; 
    res.status(200).json(user);  
});

app.get('/user/:id', (req,res)=>{
    const index = bd.indexOf(Number(req.params.id));
    console.log(index)
    if (index < 0){
        console.log("holi");
        return res.sendStatus(204);
        
    }
    return res.json({id:Number(req.params.id)});
    
});

app.delete('/user/:id', (req,res)=>{
    const index = bd.indexOf(Number(req.params.id));
    if (index < 0){
        return res.sendStatus(204);
    }
    let deleted = bd.splice(index, 1);
    return res.status(202).json({id:deleted});
});

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on ${port}`);
});
