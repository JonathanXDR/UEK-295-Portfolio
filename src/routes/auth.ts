import { Request, Response, Router } from 'express';
const router = Router();

declare module 'express-session' {
  interface SessionData {
    authenticated?: boolean;
    email?: string | null;
  }
}

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || password !== 'm295') {
    return res.status(401).send({ message: 'Invalid credentials' });
  }

  req.session.authenticated = true;
  req.session.email = email;
  return res.status(200).send({ message: 'Authenticated successfully' });
});

router.get('/verify', (req: Request, res: Response) => {
  if (!req.session.authenticated) {
    return res.status(401).send({ message: 'Token is invalid' });
  }

  return res
    .status(200)
    .send({ message: 'Token is valid', email: req.session.email });
});

router.delete('/logout', (req: Request, res: Response) => {
  req.session.authenticated = false;
  req.session.email = null;
  return res.sendStatus(204);
});

export default router;
