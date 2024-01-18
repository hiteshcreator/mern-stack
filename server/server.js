const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth",router);

const PORT = 5000;

app.listen(PORT, (err) => {
    if (err) console.log("->>",err);
    console.log(`server stared at this Port ${PORT}`);
});