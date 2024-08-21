const app = require('./app');
const db = require('./config/db');
require("dotenv").config()

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello World !!!!!')
})

app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
})
