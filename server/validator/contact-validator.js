const { z } = require("zod");

const contactSchema = z.object({
    username: z
        .string({required_error: "username is required"})
        .trim()
        .min(3, {message: "Name must be at lest of 3 chars."})
        .max(255,{message: "Name must not be more than 255 characters"}),
    email: z
        .string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .min(3, {message: "Email must be 3 characters"})
        .max(255,{message: "Email must not be more than 255 characters"}),
    description: z
        .string({required_error: "description must be required"})
        .trim()
        .min(30,{message:"description must be 30 characters"})
        .max(255,{message: "description must not be more than 255 characters"})
});

module.exports = contactSchema;