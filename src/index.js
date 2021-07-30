const express = require('express');//gives you access to the express library by searching your node_modules for "express"
const app = express();//creates an instance of the express constructor, which we will name "app"
const port = 3000;

const bd = [];
// app.use(bodyParser.json());

// const Developer =[
//     {name:'Mark'},
//     {name:'Jill'}
// ]


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
    console.log(req.params.id)
    res.json({id:Number(req.params.id)});
});

// app.post('/users',function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;

//     // This should come from the database
//     const Developer="billyTheKid";
//     const Developer="superSecret";

//     if (username===Developer && password===Developer){
//         // In practice, use JSON web token sign method here to make an encrypted token
//          res.json({
//               success: true,
//               message: 'password and username match!',
//               token: 'encrypted token goes here'
//          })
//     } else {
//          res.json({
//               success: false,
//               message: 'password and username do not match'
//          })
//     }
// });

// app.get('/users/:id',function(req,res){
// 	console.log(req.params.id)
// 	res.json({
// 		success: true,
// 		message: 'got one user',
// 		user: req.params.id
// 	})
// })

app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on ${port}`);
});
