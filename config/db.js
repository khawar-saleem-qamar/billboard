const mongoose = require('mongoose');
require("dotenv").config()

console.log("url for mongodb: ", process.env.MONGO_URL)
const connection = mongoose.createConnection(process.env.MONGO_URL)
    .on('open',()=>{
    console.log('MongoDb connected');
}).on('error',(error)=>{
    console.log(error)
    console.log('MongoDb error');
});

module.exports = connection;
