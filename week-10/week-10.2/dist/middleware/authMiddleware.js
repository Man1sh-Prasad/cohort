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
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "Auth required. You are not logged in"
        });
    }
    const jwtToken = authHeader.split(" ")[1];
    console.log(jwtToken);
    try {
        const decodedUser = jsonwebtoken_1.default.verify(jwtToken, "jwtSecret123");
        console.log(decodedUser);
        if (decodedUser && typeof decodedUser.userId === 'number') {
            req.userId = decodedUser.userId;
            next();
        }
        else {
            return res.status(401).json({
                message: "Error"
            });
        }
    }
    catch (err) {
        return res.status(411).json({
            message: "something went wrong", err
        });
    }
});
exports.authMiddleware = authMiddleware;
