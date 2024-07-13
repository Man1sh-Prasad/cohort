import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'
import rootRouter from './routes/index'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
const prisma = new PrismaClient()

dotenv.config()

app.get('/', (req: Request, res: Response) => {
    res.send("HELLo")
})

app.use('/api', rootRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});













































// insert user
// async function InsertUser(username: string, password: string, firstname: string, lastname: string) {
//     const res = await prisma.user.create({
//         data: {
//             email: username,
//             password: password,
//             firstName: firstname,
//             lastName: lastname 
//             },
//         select: {        // whatever is in select will be returned to res
//             id: true,
//             password: true
//         }
//     })
//     console.log(res)
// }
// InsertUser('rohannnprasad@gmaiil.com', 'password', 'rohannn', 'Prasad')



//Update user
// interface UpdateParams {
//     firstName: string,
//     lastName: string
// }

// async function updateUser (username: string, {firstName, lastName}: UpdateParams) {
//     const res = await prisma.user.update({
//         where: {email: username},
//         data: {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
//     console.log(res)
// }
// updateUser('rohannnprasad@gmaiil.com', {firstName: 'Rohan',lastName: 'Prasad'} )




// get user
// async function getUser(username:string) {
//     const user = await prisma.user.findFirst({
//         where: {
//             email: username
//         }
//     })
//     console.log(user)
// }
// getUser('rohannnprasad@gmaiil.com')

