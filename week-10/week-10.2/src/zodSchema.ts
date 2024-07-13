import { z } from 'zod'

export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    firstName: z.string(),
    lastName: z.string()
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const todoSchema = z.object({
    title: z.string(),
    desciption: z.string().optional() 
})