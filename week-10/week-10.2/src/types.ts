import { PrismaClient } from '@prisma/client';

declare module 'express' {
    interface Request {
        userId?: number; // Define your custom property here
    }
}
