import express from 'express';

import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import taskRouter from './routes/tasks';
import authRouter from './routes/auth';
import { checkAuth } from './middleware/auth.middleware';

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);

app.use('/auth', authRouter);
app.use('/tasks', checkAuth, taskRouter);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send({ error: 'An error occurred' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
