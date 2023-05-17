import { Request, Response, Router } from 'express';
import { Task } from '../dto/Task';

const router = Router();
const tasks: Task[] = [
  {
    id: 1,
    title: 'Buy Toast',
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  },
  {
    id: 2,
    title: 'Buy Milk',
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  },
  {
    id: 3,
    title: 'Buy Eggs',
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.status(200).send(tasks);
});

router.post('/', (req: Request, res: Response) => {
  const title = req.body.title;
  if (!title) {
    return res.sendStatus(400);
  }

  const task: Task = {
    id: tasks.length + 1,
    title,
    creationDate: new Date(),
    completionDate: null,
    userId: 1,
  };

  tasks.push(task);
  res.status(201).send(task);
});

router.get('/:id', (req: Request, res: Response) => {
  const task = tasks.find((task) => task.id === Number(req.params.id));

  if (!task) {
    return res.sendStatus(404);
  }

  res.status(200).send(task);
});

router.put('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const title = req.body.title;

  if (!title) {
    return res.sendStatus(400);
  }

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.sendStatus(404);
  }

  task.title = title;
  res.status(200).send(task);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);

  if (index < 0) {
    return res.sendStatus(404);
  }

  const [removedTask] = tasks.splice(index, 1);
  res.status(200).send(removedTask);
});

export default router;
