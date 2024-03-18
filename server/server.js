process.loadEnvFile()
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const bodyParser = require('body-parser');
const connectDb  = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// this is use for sending response in API to json format
// app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// error middleware config in all app
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then( () => {
    app.listen(PORT, (err) => {
        if (err) console.log("->>",err);
        console.log(`server stared at this Port ${PORT}`);
    });
})
