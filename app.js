const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const indexRoute = require('./routes/index')
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("mongoDB connected");
})


//middlewares
app.use(express.json())
app.use(morgan('common'))

app.use('/', indexRoute)



//error handling middleware
app.use(function(err, req, res, next) {
    
    console.log("error consoling");
    console.log(err);
    res.status(500);
    res.json(err);
  });

  const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server is running`);
})