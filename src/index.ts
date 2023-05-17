import express from 'express';
import session from 'express-session';
import taskRouter from './routes/tasks';
import authRouter from './routes/auth';

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
app.use(taskRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
