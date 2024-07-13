import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware } from "../middleware/authMiddleware";
import { todoSchema } from "../zodSchema";

const router = Router()
const prisma = new PrismaClient()

// add todo
router.post('/todos', authMiddleware, async (req: Request, res: Response) => {
    const response = todoSchema.safeParse(req.body)
    console.log(req.body)
    try {
        if(req.userId){         // if statement because - TypeScript expects the userId field in the create method to be of a specific type (number | undefined), but your req.userId might be undefined if the user is not authenticated.
            const todo = await prisma.todo.create({
                data: {
                    title: req.body.title,
                    description: req.body.description,
                    userId: req.userId
                }
            })
            res.status(200).json({
                todo: todo
            })
        } else {
            throw new Error("userId not available")
        }
    } catch(err) {
        console.log('Error while adding todo', err)
    }
})

// get Todo
router.get('/todos', authMiddleware, async (req: Request, res: Response) => {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                userId: req.userId
            }
        })
        res.status(200).json({
            todos: todos
        })
    } catch(error) {
        res.status(400).json({
            error: error
        })
    }
})

export default router