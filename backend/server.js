const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const CredModel=require('./models/Details.js')
// const http=require('http')

const app=express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/Practice").then(msg=>{console.log('Connected')}).catch(err=>{console.log(err)});


app.post('/check',(req,res)=>{
    const {email}=req.body;
    console.log('req.body');
    CredModel.findOne({email:email}).then(user=>{
        if(user){
            res.json('true')
        }else{
            res.json('false')
        }
    })
})

app.post('/store',(req,res)=>{
    CredModel.create(req.body).then(cred=>{res.json(cred)}).catch(err=>{res.json(err)})
    console.log(req.body);
})

app.listen(5000,()=>{
    console.log('Running...........')
})