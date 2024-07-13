import { PrismaClient } from '@prisma/client';

// By declaring userId in the Request interface extension (express.d.ts), TypeScript recognizes userId as a valid property for Request objects.
declare module 'express' {
    interface Request {
        userId?: number; // Define your custom property here
    }
}
