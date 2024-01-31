import { FC } from 'react';
import { googleImg, discordImg } from '../assets/buttonImgs';

export const AuthThirdParty: FC<{ authType: string }> = ({ authType }) => {
  const authTypeText = authType === 'signup' ? 'Sign Up' : 'Sign In';

  return (
    <div className='form-third-party'>
      <button className='form-btn google'>
        {googleImg}
        {authTypeText} with Google
      </button>
      <button className='form-btn discord'>
        {discordImg}
        {authTypeText} with Discord
      </button>
    </div>
  );
};
