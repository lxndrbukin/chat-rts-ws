import './assets/styles.scss';
import { FC } from 'react';

export const CreateRoom: FC = (): JSX.Element => {
  return (
    <div className="rooms-create">
      <h2>Create a Room</h2>
      <div className="rooms-create-form-container">
        <form className="form">
          <input type="text" className="form-input" name="Room Name" />
          <input type="password" className="form-input" name="Room Password" />
          <button className="form-btn">Create</button>
        </form>
      </div>
    </div>
  );
};
