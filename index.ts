import session from 'express-session';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

const taskRouter = require('./routes/taskRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export {};
