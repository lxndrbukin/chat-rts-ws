import { Express, Request, Response } from 'express';

export default (app: Express): void => {
  app.get('/', (req: Request, res: Response): void => {
    res.send('Hello there');
  });
};