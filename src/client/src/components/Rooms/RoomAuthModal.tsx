import { FC, FormEvent } from 'react';
import { RoomAuthModalProps } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppDispatch, enterRoom } from '../../store';
import Modal from 'react-modal';
import { RootState } from '../../store';

Modal.setAppElement('#root');

export const RoomAuthModal: FC<RoomAuthModalProps> = ({
  isOpen,
  toggleModal,
}): JSX.Element | null => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentRoom } = useSelector((state: RootState) => state.rooms);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { roomId, roomAuth } = currentRoom!;
    if (roomAuth?.pwProtected) {
      const target = e.target as typeof e.target & {
        password: { value: string };
      };
      const { password } = target;
      if (roomId) dispatch(enterRoom({ roomId, password: password.value }));
    } else {
      if (roomId) dispatch(enterRoom({ roomId, password: undefined }));
    }
  };

  const handleToggle = (): void => {
    toggleModal();
  };

  const renderInput = currentRoom?.roomAuth?.pwProtected && (
    <input className="form-input" placeholder="Password" name="password" />
  );

  const renderErrorMsg = currentRoom?.roomAuth?.message && (
    <span className="form-error">{currentRoom.roomAuth.message}</span>
  );

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
      backgroundColor: 'transparent',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1,
    },
  };

  if (currentRoom?.roomAuth?.authorized) {
    return <Navigate to={`/rooms/${currentRoom.roomId}`} />;
  }

  return (
    <Modal onRequestClose={handleToggle} isOpen={isOpen} style={customStyles}>
      <div className="rooms-form-container">
        <div className="rooms-form">
          <h2>Join {currentRoom?.roomName}</h2>
          <form onSubmit={handleSubmit} className="form">
            {renderInput}
            {renderErrorMsg}
            <button className="form-btn">Join</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
