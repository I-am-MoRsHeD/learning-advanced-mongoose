import express, { Application, NextFunction, Request, Response } from 'express';
import { userRoutes } from './app/controllers/user.controller';

const app: Application = express();

app.use(express.json());

app.use('/users', userRoutes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome to Note App');
});

export default app;