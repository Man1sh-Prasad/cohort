"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const zodSchema_1 = require("../zodSchema");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
// signup route
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation of data using zod
        const response = zodSchema_1.userSchema.safeParse(req.body);
        console.log(req.body);
        if (!response.success) {
            return res.status(411).json({
                message: "Incorrect Inputs"
            });
        }
        // check whether user already exists
        const existingUser = yield prisma.user.findUnique({
            where: { email: req.body.email }
        });
        if (existingUser) {
            return res.status(411).json({
                message: "Email already taken"
            });
        }
        // hash password
        const saltrounds = 10;
        const originalPassword = req.body.password;
        // generate salt and create hash password
        const salt = yield bcryptjs_1.default.genSalt(saltrounds);
        const hashPassword = yield bcryptjs_1.default.hash(originalPassword, salt);
        // create new user
        const newUser = yield prisma.user.create({
            data: {
                email: req.body.email,
                password: hashPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        });
        res.status(200).json({
            message: "User Created Successfully"
        });
    }
    catch (err) {
        console.log("Error while signing in", err);
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation of input
        const response = zodSchema_1.loginSchema.safeParse(req.body);
        console.log(req.body);
        if (!response.success) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }
        //verify user
        const user = yield prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });
        console.log(user);
        if (!user) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }
        // check if password is correct
        const hashPassword = user.password;
        const originalPassword = req.body.password;
        const isPasswordCorrect = yield bcryptjs_1.default.compare(originalPassword, hashPassword);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid Credentials"
            });
        }
        // make a jwt token
        const userToken = jsonwebtoken_1.default.sign({ userId: user.id }, "jwtSecret123");
        return res.status(200).json({
            token: userToken
        });
    }
    catch (error) {
        console.log('Error while logging in ', error);
    }
}));
exports.default = router;
