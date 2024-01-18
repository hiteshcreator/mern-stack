//Auth router file
const express = require("express");
const router  =  express.Router();

router.get("/", (req, res) => {
    res.status(200).send("welcome to mern stack series ?????");
});

// Another method to call Get & Post Method
router.route("/next").get((req, res) => {
    res.status(200).send("another method...");
});


router.route("/register").get((req,res) => {
    res.status(200).send("welcome to registration page");
});

module.exports = router;