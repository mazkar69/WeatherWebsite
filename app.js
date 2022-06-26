
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;  
const path = require("path")
const pug = require("pug")


//Static folder path
 const staticPath = path.join(__dirname,"/static")


// app.use(express.static(staticPath))
app.use("/static",express.static("static"))
app.use(express.urlencoded())       //Help to get the data from the form if the req type is post .


// Setting the template engine.
app.set('view engine','pug')
app.set("views",path.join(__dirname,"views"))       //Secound argument is the name of folder.




app.get("/",(req,res)=>{
    res.render("index");

})

app.get("/about",(req,res)=>{
    res.render("about")

})

app.get("/weather",(req,res)=>{
    res.render("weather")

})

app.get("*",(req,res)=>{
    res.render("404")

})

app.listen(port,()=>{
    console.log(`Website is running at port ${port}.`)
})