"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
app.get('/', (req, res) => {
    res.send("HELLo");
});
app.use('/api', index_1.default);
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
