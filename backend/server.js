const express=require('express');
const dotenv=require('dotenv').config();
const bodyParser = require('body-parser');
const colors=require('colors');
const connectDB=require('./config/db')
const {errorHandler}=require('../backend/midlleware/errorMiddleware');
const port= process.env.PORT || 5858;

connectDB();
const server =express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(express.json());
server.use('/api/customers', require('./routes/customerRoutes'));
server.use(errorHandler);


server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})