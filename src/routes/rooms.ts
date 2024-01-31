import { Express, Request, Response } from 'express';
import Room from '../models/Room';

export default (app: Express): void => {
  app.post('/_api/rooms', async (req: Request, res: Response) => {
    const { roomName, password } = req.body;
    const roomId = (await Room.countDocuments()) + 1;
    const room = await Room.create({
      roomId,
      roomName,
      password,
      messages: [],
      members: [req.session && req.session.userId],
    });
    res.send(room);
  });
};
