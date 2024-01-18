const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("welcome to mern stack series");
});

app.get("/register", (req, res) => {
    res.status(200).send("welcome to register pages");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server stared at this Port ${PORT}`);
});