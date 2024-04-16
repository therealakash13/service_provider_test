const {z} = require('zod');

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is Required."})
    .trim()
    .min(3, {message:"Username must be atleast 3 characters"})
    .max(17, {message:"Username must not be more than 17 characters"}),
    
    email: z
    .string ({required_error:"Email is required."})
    .trim()
    .email({message:"Invalid Email Address."})
    .min(7, {message:"Email must be at least 7 characters."})
    .max(20, {message:"Email must be not more than 20 characters."}),
    
    phone: z
    .string({required_error:"Phone Number is required."})
    .trim()
    .min(10,{message:"Phone Number must be at least 10 numbers."})
    .max(11,{message:"Phone Number must be of least 10 Numbers"}),

    password: z
    .string({required_error:"Password is required."})
    .min(7,{message:"Password must contain 7 characters"})
    .max(20,{message:"Password must contain 20 characters only."})
});

const loginSchema = z.object({
  email: z
    .string ({required_error:"Email is required."})
    .trim()
    .email({message:"Invalid Email Address."})
    .min(7, {message:"Email must be at least 7 characters."})
    .max(20, {message:"Email must be not more than 20 characters."}),

  password: z
    .string({required_error:"Password is required."})
    .min(7,{message:"Password must contain 7 characters"})
    .max(20,{message:"Password must contain 20 characters only."})
});

module.exports = (signupSchema, loginSchema);