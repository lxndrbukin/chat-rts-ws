import { FC } from 'react';
import { AuthProps } from '../types';
import { AuthThirdParty } from './AuthThirdParty';

export const Auth: FC<AuthProps> = ({ authType, children }): JSX.Element => {
  const header = authType === 'signup' ? 'Welcome!' : 'Welcome Back!';
  return (
    <div className="auth-container">
      <h2>{header}</h2>
      <div className="auth">
        <div className="auth-form-container">
          <AuthThirdParty authType={authType} />
          {children}
        </div>
      </div>
    </div>
  );
};
