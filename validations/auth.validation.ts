import * as z from "zod";


const LoginSchema = z.object({
    email: z
        .string({required_error: "Email is required",})
        .min(1, {message: "Email is required"})
        .email({message: "Email must be a valid email"}),
    password: z
        .string({required_error: "Password is required"})
        .min(8, {message: "Password must be at least 8 characters"})
        .max(16, {message: "Password must be less than 16 characters"})
});

const SignupSchema = z.object({
    name: z
        .string({required_error: "Name is required"})
        .min(1, {message: "Name is required"}),
    email: z
        .string({required_error: "Email is required"})
        .min(1, {message: "Email is required"})
        .email({message: "Email must be a valid email"}),
    password: z
        .string({required_error: "Password is required"})
        .min(8, {message: "Password is required"})
        .max(16, {message: "Password must be less than 16 characters"}),
    confirmPassword: z
        .string({required_error: "Confirm password is required"})
        .min(8, {message: "Password is required"})
        .max(16, {message: "Password must be less than 16 characters"})
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export default {
    LoginSchema,
    SignupSchema
}