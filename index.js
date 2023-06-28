const express=require('express');
const bodyparser=require('body-parser');
const ejs=require('ejs');

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>
{
    res.render("home");
})

app.listen(5000,()=>
{
    console.log("Hey your server get started");
})