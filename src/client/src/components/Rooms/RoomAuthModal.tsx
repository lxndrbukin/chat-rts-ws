import { FC, FormEvent } from 'react';
import { RoomAuthModalProps } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, enterRoom } from '../../store';
import Modal from 'react-modal';
import { RootState } from '../../store';

Modal.setAppElement('#root');

export const RoomAuthModal: FC<RoomAuthModalProps> = ({
  isOpen,
  toggleModal,
}): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomId } = useSelector(
    (state: RootState) => state.rooms.currentRoom!
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as typeof e.target & {
      password: { value: string };
    };
    const { password } = target;
    dispatch(enterRoom({ roomId, password: password.value }));
    toggleModal();
  };

  const handleToggle = (): void => {
    toggleModal();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 'fit-content',
      padding: '15px',
      backgroundColor: '#313338',
      border: '1px solid #232428',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.72)',
      zIndex: 1,
    },
  };

  return (
    <Modal onRequestClose={handleToggle} isOpen={isOpen} style={customStyles}>
      <div className="rooms-form-container">
        <h2>Enter the Room</h2>
        <div className="rooms-form">
          <form className="form">
            <input
              className="form-input"
              placeholder="Password"
              name="password"
            />
            <button className="form-btn">Join</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
