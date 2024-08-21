const mongoose = require('mongoose');
require("dotenv").config()

const connection = mongoose.createConnection(process.env.MONGO_URL)
    .on('open',()=>{
    console.log('MongoDb connected');
}).on('error',()=>{
    console.log('MongoDb error');
});

module.exports = connection;
