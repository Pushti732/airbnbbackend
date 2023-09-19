const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
var cors = require('cors');
dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

mongoose.connect(process.env.MONGODB_URL).then(()=> {
    console.log('applicaiton connected to database')
}).catch((err)=> {
    console.log(err);
})

app.listen(3000,async ()=> {
    console.log("this project started at port number 3000 ")
})