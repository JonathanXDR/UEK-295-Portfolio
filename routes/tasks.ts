import { Request, Response, Router } from 'express';
import { Task } from '../dto/Task';
const router = Router();

const tasks = [
  {
    id: 1,
    title: 'Buy Toaster',
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  },
] as Task[];

router.get('/tasks', (req: Request, res: Response) => {
  res.status(200).send(tasks);
});

router.post('/tasks', (req: Request, res: Response) => {
  const title = req.body.title;

  if (title) {
    const task = {
      id: tasks.length + 1,
      title: title,
      creationDate: new Date(),
      completionDate: null,
      userId: 1,
    } as Task;

    tasks.push(task);
    res.status(201).send(task);
  } else {
    res.sendStatus(422);
  }
});

export default router;
