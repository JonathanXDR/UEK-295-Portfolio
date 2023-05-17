import { NextFunction, Request, Response } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.authenticated) {
    next();
  }
  res.status(403).send({ message: 'Not authenticated' });
};
