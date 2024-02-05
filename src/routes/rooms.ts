import { Express, Request, Response } from 'express';
import { createPassword } from './helpers/passwordHelpers';
import Room from '../models/Room';
import User from '../models/User';

export default (app: Express): void => {
  app.get('/_api/rooms', async (req: Request, res: Response): Promise<void> => {
    const rooms = await Room.find().select('-__v -_id');
    const roomsList = rooms.map(async (room) => {
      const { roomId, roomName, members, password } = room;
      const roomData = {
        roomId,
        roomName,
        members: members.length,
        pwProtected: password ? true : undefined,
      };
      return roomData;
    });
    res.send(await Promise.all(roomsList));
  });

  app.get('/_api/rooms/:roomId', async (req: Request, res: Response) => {
    const { roomId } = req.params;
    const room = await Room.findOne({ roomId }).select('-__v -_id');
    if (room) {
      const promises = room.members.map(async (member) => {
        try {
          return await User.findOne({ userId: member }).select(
            '-password -__v -_id -email'
          );
        } catch (err) {
          console.log(err);
        }
      });
      const members = await Promise.all(promises);
      const roomData = Object.assign(room, { members });
      res.send(roomData);
    }
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