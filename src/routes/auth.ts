import { Express, Request, Response } from 'express';
import { createPassword, comparePasswords } from './helpers/passwordHelpers';
import User from '../models/User';

export default (app: Express): void => {
  app.post('/auth/signup', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(403).json({ message: 'Email already in use' });
    const userId = await User.countDocuments() + 1;
    const user = await User.create({
      userId,
      email,
      username: 'User' + userId,
      password: await createPassword(password)
    });
    req.session = { userId, email, username: user.username, avatar: user.avatar };
    res.send(req.session);
  });

  app.post('/auth/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json({ message: 'User not found' });
    const passwordCheck = await comparePasswords(user.password, password);
    if (user && !passwordCheck) return res.status(403).json({ message: 'Incorrect password' });
    const { userId, username } = user;
    req.session = { userId, email, username, avatar: user.avatar };
    res.send(req.session);
  });

  app.get('/auth/logout', (req: Request, res: Response) => {
    req.session = null;
    res.send({});
  });
};
