import { FC } from 'react';
import { RoomAuthModalProps } from './types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const RoomAuthModal: FC<RoomAuthModalProps> = ({
  isOpen,
}): JSX.Element => {
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
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.72)',
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className='rooms-form-container'>
        <h2>Enter the Room</h2>
        <div className='rooms-form'>
          <form className='form'>
            <input
              className='form-input'
              placeholder='Password'
              name='password'
            />
            <button className='form-btn'>Submit</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
