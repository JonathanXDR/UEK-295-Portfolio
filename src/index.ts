import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import taskRouter from './routes/tasks';
import authRouter from './routes/auth';
import swaggerFile from './swagger/swagger-output.json';
import swaggerUi from 'swagger-ui-express';
import { checkAuth } from './middleware/auth';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
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
