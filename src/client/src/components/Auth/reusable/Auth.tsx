import { FC } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthProps } from '../types';
import { AuthThirdParty } from './AuthThirdParty';
import { RootState } from '../../../store';

export const Auth: FC<AuthProps> = ({ authType, children }): JSX.Element => {
  const { isLoggedIn } = useSelector((state: RootState) => state.session);

  if (isLoggedIn) {
    return <Navigate replace to='/' />;
  }

  const header = authType === 'signup' ? 'Welcome!' : 'Welcome Back!';
  return (
    <div className='auth-container'>
      <h2>{header}</h2>
      <div className='auth'>
        <div className='auth-form-container'>
          <AuthThirdParty authType={authType} />
          {children}
        </div>
      </div>
    </div>
  );
};
