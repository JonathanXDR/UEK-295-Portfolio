import { Request, Response, Router } from 'express';
const router = Router();

declare module 'express-session' {
  interface SessionData {
    authenticated?: boolean;
    email?: string | null;
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

router.get('/verify', (req: Request, res: Response) => {
  if (req.session.authenticated) {
    res
      .status(200)
      .send({ message: 'Token is valid', email: req.session.email });
  } else {
    res.status(401).send({ message: 'Token is invalid' });
  }
});

router.delete('/logout', (req: Request, res: Response) => {
  req.session.authenticated = false;
  req.session.email = null;
  res.sendStatus(204);
});

export default router;
