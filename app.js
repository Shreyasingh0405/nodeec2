const express = require('express');
const mongoose = require("mongoose")
const app = express();

const PORT = 3004
//const mongoUri = "mongodb://localhost:27017/abc"

//mongoose.connect("mongodb://localhost:27017/abc")
//mongoose.connect("mongodb://127.0.0.1:27017/abc")
//mongoose.connect("mongodb://192.168.0.106:27017/abc")
mongoose.connect("mongodb://172.31.82.12:27017/abc")


    .then(() => { console.log("mongo connected") })
    .catch((err) => { console.log(err) })



app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
