const express=require('express');
const cors=require('cors');
const fetch=require('node-fetch');
const bodyparser=require('body-parser');
const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.post('/getweather',(req,res)=>{
    const name=req.body.name;
    fetch(`http://api.weatherstack.com/current?access_key=766c2aee4565c7bf6c109d7c00089edb&query=${name}`)
    .then(result=>result.json())
    .then(data=>res.send(data))
    .catch(err=>console.log(err));
});
const port=process.env.port || 5000;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});