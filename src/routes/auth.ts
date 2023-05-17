import { Request, Response, Router } from 'express';
const router = Router();

declare module 'express-session' {
  interface SessionData {
    authenticated?: boolean;
    email?: string;
  }
}

router.post('/login', (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password === 'm295') {
    req.session.authenticated = true;
    req.session.email = email;
    res.status(200).send({ message: 'Authenticated successfully' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

export default router;
