//שימוש בספריית express
const express = require('express'); 
const fs = require('fs');
const app = express(); 

//הגדרת port
const port=8000;

const workers=require('./Routers/workersRouter');
const courses=require('./Routers/coursesRouter');
const { error } = require('console');


 app.use(workers);
//  app.use(worker);
 app.use(courses);
//  app.use(course);


app.get("*", function (req, res) {
    res.status(404).send("error in your address");   
});

// app.get('/',function(req,res){
//     fs.readFile('./ejijfj.json' ,(err,data)=>{
//         if(err){
//             res.status(500).send('There is currently an error On the server, try again later');
//         }
//         else{
//             res.send(data);
//         }
//     })
// })


app.use ((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).sendsend('There is currently an error On the server, try again later');
}) 
    
  


//שולח ל-port
app.listen(port, () => {
    console.log("listening on http://localhost:8000");
});