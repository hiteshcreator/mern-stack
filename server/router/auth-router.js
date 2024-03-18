//Auth router file
const express = require("express");
const router  =  express.Router();
const authControllers = require("../controllers/auth-controller");
const validateSchema = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware")

router.route("/").get(authControllers.home);
router.route("/register").post( validate(validateSchema.singupSchema),authControllers.register);
router.route("/login").post(validate(validateSchema.loginSchema),authControllers.login);

module.exports = router;