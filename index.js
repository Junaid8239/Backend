// const fs=require("fs");
// const path=require("path")

// const a=require('./demo');


// const fileCreate=path.join(process.cwd(),"file.txt");

// fs.writeFileSync(fileCreate,"hey this is file");
// const readFile=fs.readFileSync(fileCreate)
// console.log(readFile.toString())
// console.log(a);

// app.get("/",async(req,res) => {
//     res.send("hello world");
// })

// app.get("/Aboutus",async(req,res) => {
//     res.send("About us");
// })

// app.post("/add",async (req,res)=>{
//     res.send("this is post")
// })

const express=require("express")
const app=express();
const mongoose=require('mongoose')

app.use(express.json())
app.use(express.urlencoded(({extended:true})));
require('./route')(app);

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://0.0.0.0:27017/test',{
    useNewUrlParser: true,
    useUnifiedtopology: true
});

const con = mongoose.connection;

con.on('open', () => {
    console.log('server is connected');
})

app.listen(4000,() =>{
    console.log("listening on 4000")
})

