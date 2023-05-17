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
  const task = {
    id: tasks.length + 1,
    title: title,
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  } as Task;

  if (title) {
    tasks.push(task);
    res.status(201).send(task);
  } else {
    res.sendStatus(422);
  }
});

router.get('/tasks/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id) as Task;

  if (task) {
    res.status(200).send(task);
  } else {
    res.sendStatus(404);
  }
});

router.put('/tasks/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const title = req.body.title;
  const index = tasks.findIndex((task) => task.id === id);
  const task = {
    id: tasks.length + 1,
    title: title,
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  } as Task;

  if (title) {
    if (index >= 0) {
      tasks[index] = task;
      res.status(200).send(task);
    } else {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(422);
  }
});

router.delete('/tasks/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  const task = tasks.find((task) => task.id === id) as Task;

  if (index >= 0) {
    tasks.splice(index, 1);
    res.status(200).send(task);
  } else {
    res.sendStatus(404);
  }
});

export default router;
