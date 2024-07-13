"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = exports.loginSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string()
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.todoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    desciption: zod_1.z.string().optional()
});
