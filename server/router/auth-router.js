//Auth router file
const express = require("express");
const router  =  express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validateSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post( validate(validateSchema.singupSchema),authcontrollers.register);
router.route("/login").post(validate(validateSchema.loginSchema),authcontrollers.login);


module.exports = router;