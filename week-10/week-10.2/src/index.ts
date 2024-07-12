import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
async function getUser(username:string) {
    const user = await prisma.user.findFirst({
        where: {
            email: username
        }
    })
    console.log(user)
}
getUser('rohannnprasad@gmaiil.com')

