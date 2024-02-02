import { Express, Request, Response } from 'express';
import { createPassword } from './helpers/passwordHelpers';
import Room from '../models/Room';

export default (app: Express): void => {
  app.get('/_api/rooms', async (req: Request, res: Response): Promise<void> => {
    const rooms = await Room.find();
    res.send(rooms);
  });

  app.post(
    '/_api/rooms',
    async (req: Request, res: Response): Promise<void> => {
      const { roomName, password } = req.body;
      const roomPassword = password
        ? await createPassword(password)
        : undefined;
      const roomId = (await Room.countDocuments()) + 1;
      const room = await Room.create({
        roomId,
        roomName,
        password: roomPassword,
        messages: [],
        members: [req.session && req.session.userId],
      });
      res.send(room);
    }
  );
};
