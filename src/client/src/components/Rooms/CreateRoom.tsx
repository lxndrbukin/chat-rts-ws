import './assets/styles.scss';
import { FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, createRoom } from '../../store';

export const CreateRoom: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const createNewRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      roomName: { value: string };
      password: { value: string };
    };
    const { roomName, password } = target;
    const room = {
      roomName: roomName.value,
      password: password.value,
    };
    dispatch(createRoom(room));
    navigate('/rooms');
  };

  return (
    <div className="rooms-create">
      <h2>Create a Room</h2>
      <div className="rooms-create-form-container">
        <form className="form" onSubmit={createNewRoom}>
          <input
            type="text"
            placeholder="Room Name"
            className="form-input"
            name="roomName"
          />
          <input
            type="password"
            placeholder="Room Password"
            className="form-input"
            name="password"
          />
          <button className="form-btn">Create</button>
        </form>
      </div>
    </div>
  );
};
