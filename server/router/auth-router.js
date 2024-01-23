//Auth router file
const express = require("express");
const router  =  express.Router();
const authcontrollers = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").get(authcontrollers.register);
router.route("/dashboard").get(authcontrollers.dashboard);


module.exports = router;