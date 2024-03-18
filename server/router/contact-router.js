const express = require("express");
const router  =  express.Router();

const contactControllers = require("../controllers/contact-controller");
const contactSchema = require("../validator/contact-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/contact").post(validate(contactSchema),contactControllers.createContact);

module.exports = router;