const express=require("express");
const app=express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoute = require('./routes/Todos')

app.use('/api/v1',todoRoute);


app.listen(PORT,()=>{
   console.log(`server listen  at port  ${PORT}`); 
})

const dbConnect=require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
  res.send(`<h1>this is a home page</h1>`)
})