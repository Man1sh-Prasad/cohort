import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "Auth required. You are not logged in"
        })
    }

    const jwtToken = authHeader.split(" ")[1]
    console.log(jwtToken)

    try {
        const decodedUser = jwt.verify(jwtToken, "jwtSecret123") as jwt.JwtPayload
        console.log(decodedUser)
        if(decodedUser && typeof decodedUser.userId === 'number') {
            req.userId = decodedUser.userId
            next()
        } else {
            return res.status(401).json({
                message: "Error"
            })
        }
    } catch(err) {
        return res.status(411).json({
            message: "something went wrong", err
        })
    }
}