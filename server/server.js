const express = require("express");
const app = express();
const router = require("./router/auth-router");
const bodyParser = require('body-parser');

// this is use for sending response in API to json format
// app.use(express.json());
    
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/auth",router);

const PORT = 5000;

app.listen(PORT, (err) => {
    if (err) console.log("->>",err);
    console.log(`server stared at this Port ${PORT}`);
});