import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// create user
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const response = await prisma.user.create({
//         data: {
//             username, 
//             password, 
//             firstName, 
//             lastName
//         }
//     })
//     console.log(response)
// }
// insertUser('rohan@gmail.com', 'rohan123', 'rohan', 'Prasad')