import { NextFunction, Request, Response } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.authenticated) {
    return res.status(403).send({ message: 'Not authenticated' });
  }
  next();
};
