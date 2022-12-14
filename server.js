const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
//    useCreateIndex: true, 
   useNewUrlParser: true, 
   useUnifiedTopology: true,
//    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection is Success");
});
app.listen(PORT,() => {
    console.log(`Server is Running on ${PORT}`);
});
const todoRouter = require("./routes/Todos");
app.use("/todo",todoRouter);




