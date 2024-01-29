import { Express, Request, Response } from 'express';

export default (app: Express) => {
  app.post('/auth/signup', (req: Request, res: Response) => {
    console.log(req.body);
  });
};
