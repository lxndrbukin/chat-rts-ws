import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const AuthRoom: FC = (): JSX.Element => {
  console.log(useParams());

  return (
    <div className="rooms-form-container">
      <h2>Enter the Room</h2>
      <div className="rooms-form">
        <form className="form">
          <input
            className="form-input"
            placeholder="Password"
            name="password"
          />
          <button className="form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};
