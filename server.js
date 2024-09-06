const express = require('express');
require('dotenv').config();
const app = express();
const initRoute = require('./routes')
const port = process.env.PORT || 8888;
const dbconnect = require('./config/dbconnect');
const cookieParser = require('cookie-parser');

const http = require("http");

const server = http.createServer(app);

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

dbconnect();

app.use("/",(req,res)=>{
    return res.send("hello")
})
initRoute(app);


server.listen(port, () => {
  console.log(`server is running with port : ${port}`);
});

