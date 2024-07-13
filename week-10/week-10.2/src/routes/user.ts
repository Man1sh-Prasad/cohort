import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { loginSchema, userSchema } from "../zodSchema";
import bcrypt, {hash} from 'bcryptjs'
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import dotenv from 'dotenv'

const router = Router()
const prisma = new PrismaClient()
dotenv.config()

// signup route
router.post('/signup', async (req: Request, res: Response) => {
    try {
        // validation of data using zod
        const response = userSchema.safeParse(req.body)
        console.log(req.body)
        if(!response.success) {
            return res.status(411).json({
                message: "Incorrect Inputs"
            })
        } 
        
        // check whether user already exists
        const existingUser = await prisma.user.findUnique({
            where: {email: req.body.email}
        })
        if(existingUser) {
            return res.status(411).json({
                message: "Email already taken"
            })
        }

        // hash password
        const saltrounds = 10
        const originalPassword = req.body.password
        // generate salt and create hash password
        const salt = await bcrypt.genSalt(saltrounds)
        const hashPassword = await bcrypt.hash(originalPassword, salt)

        // create new user
        const newUser = await prisma.user.create({
            data: {
                email: req.body.email,
                password: hashPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName   
            }
        })
        res.status(200).json({
            message: "User Created Successfully"
        })

    } catch(err) {
        console.log("Error while signing in", err)
    }
})

router.post('/signin', async (req: Request, res: Response) => {
    try {
        // validation of input
        const response = loginSchema.safeParse(req.body)
        console.log(req.body)
        if(!response.success) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        //verify user
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        })
        console.log(user)
        if(!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        // check if password is correct
        const hashPassword = user.password
        const originalPassword = req.body.password
        
        const isPasswordCorrect = await bcrypt.compare(originalPassword, hashPassword)
        if(!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        // make a jwt token
        const userToken = jwt.sign({ userId: user.id }, "jwtSecret123");
        return res.status(200).json({
            token: userToken
        })
    } catch (error) {
        console.log('Error while logging in ', error)
    }
    
})

export default router