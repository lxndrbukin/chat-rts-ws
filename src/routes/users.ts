import { Express, Request, Response } from 'express';
import User from '../models/User';

export default (app: Express): void => {
  app.get('/_api/current_user', async (req: Request, res: Response) => {
    if (req.session && req.session.userId) {
      const { userId } = req.session;
      const user = await User.findOne({ userId }).select('-__v -password -_id');
      return res.send(user);
    }
    res.send(null);
  });
};