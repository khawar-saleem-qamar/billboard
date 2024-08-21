const mongoose = require('mongoose');
require("dotenv").config()

console.log("url for mongodb: ", process.env.MONGO_URL)
// const connection = mongoose.createConnection(process.env.MONGO_URL)
//     .on('open',()=>{
//     console.log('MongoDb connected');
// }).on('error',(error)=>{
//     console.log(error)
//     console.log('MongoDb error');
// });

const connection = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
      console.log("Connected to DB and Server is Running");
  })
  .catch((error) => {
    console.log(error);
  });


module.exports = connection;
