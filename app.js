const express = require("express")
const app = express();
const pug = require("pug")
const path = require("path")

const port = process.env.PORT || 5000;


// setting static file
app.use("/static",express.static("static"))
app.use(express.urlencoded())     //help to get the value from the form 


// Setting the template engine
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views"))




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
