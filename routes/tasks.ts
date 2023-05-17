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
  res.send(tasks);
});

export default router;
