require("dotenv").config({})
const express = require('express')
const app = express();
const port = 3002;
const mainRoutes = require('./src/Routes')

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', mainRoutes)

app.listen(port, ()=> {
    console.log("server running");
})