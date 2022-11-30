const express=require('express');
const app=express()
const cors=require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

const router=require('./routes');
app.use('/api',router);
app.listen(3000,()=>{
    console.log("estoy escuchando en 3000");
});