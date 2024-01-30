import { FC } from 'react';
import { googleImg, discordImg } from '../assets/buttonImgs';

export const AuthThirdParty: FC<{ authType: string }> = ({ authType }) => {
  const authTypeText = authType === 'signup' ? 'Sign Up' : 'Sign In';

  return (
    <div className="auth-form-third-party">
      <button className="auth-form-btn google">
        {googleImg}
        {authTypeText} with Google
      </button>
      <button className="auth-form-btn discord">
        {discordImg}
        {authTypeText} with Discord
      </button>
    </div>
  );
};
