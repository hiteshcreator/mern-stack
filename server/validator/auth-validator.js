const { z } = require("zod");

// creating an object schema
const singupSchema = z.object({
    username: z
        .string({required_error: "Name is required"})
        .trim()
        .min(3, {message: "Name must be at lest of 3 chars."})
        .max(255,{message: "Name must not be more than 255 characters"}),
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .min(3, {message: "Email must  address"})
        .max(255,{message: "Email must not be more than 255 characters"}),
    phone: z
        .string({required_error: "Phone number is required"})
        .trim()
        .min(10, {message: "Phone must be at lest of 10 chars."})
        .max(20,{message: "Name must not be more than 20 characters"}),
    password: z
        .string({required_error: "Password is required"})
        .trim()
        .min(7, {message: "password must be at lest of 6 chars."})
        .max(1024,{message: "Name must not be more than 255 characters"}),    
});

module.exports = singupSchema;