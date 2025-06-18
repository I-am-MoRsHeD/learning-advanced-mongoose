import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome to Note App');
});

export default app;