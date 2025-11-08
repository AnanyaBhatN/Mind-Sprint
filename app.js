const express = require('express')
const path = require('path')

const app = express();

app.get('/', (req, res)=>{
    res.send("this is landing page///")
})

app.get('/c', (req, res)=>{
    res.sendFile(path.join(__dirname+"/courses.html"))
})

app.get('/signup', (req, res)=>{
    res.send("this is sign up page///")
})

app.get('/home', (req, res)=>{
    res.send("this is home page///")
})

app.get('/courses', (req, res)=>{
    res.sendFile(path.join(__dirname+"/courses.html"))
})

app.get('/video', (req, res)=>{
    res.sendFile(path.join(__dirname+"/video.html"))
})

app.get('/like', (req, res)=>{
    res.sendFile(path.join(__dirname+"/like.html"))
})

app.listen(8888, ()=>{
    console.log("server is running")
}) 
























