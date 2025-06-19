import express, { Request, Response } from 'express';
import User from '../models/user.model';
import { z } from 'zod';

export const userRoutes = express.Router();

const CreateUserZodSchema = z.object(
    {
        firstName: z.string(),
        lastName: z.string(),
        age: z.number(),
        email: z.string(),
        password: z.string(),
        role: z.string().optional()
    }
);

userRoutes.post("/create-user", async (req: Request, res: Response) => {
    try {
        // const body = req.body;

        const body = await CreateUserZodSchema.parse(req.body);
        console.log(body);

        // const user = await User.create(body);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            // user
        })
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message,
            error
        })
    }

})

