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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const authMiddleware_1 = require("../middleware/authMiddleware");
const zodSchema_1 = require("../zodSchema");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// add todo
router.post('/todos', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = zodSchema_1.todoSchema.safeParse(req.body);
    console.log(req.body);
    try {
        if (req.userId) { // if statement because - TypeScript expects the userId field in the create method to be of a specific type (number | undefined), but your req.userId might be undefined if the user is not authenticated.
            const todo = yield prisma.todo.create({
                data: {
                    title: req.body.title,
                    description: req.body.description,
                    userId: req.userId
                }
            });
            res.status(200).json({
                todo: todo
            });
        }
        else {
            throw new Error("userId not available");
        }
    }
    catch (err) {
        console.log('Error while adding todo', err);
    }
}));
// get Todo
router.get('/todos', authMiddleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: req.userId
            }
        });
        res.status(200).json({
            todos: todos
        });
    }
    catch (error) {
        res.status(400).json({
            error: error
        });
    }
}));
exports.default = router;
