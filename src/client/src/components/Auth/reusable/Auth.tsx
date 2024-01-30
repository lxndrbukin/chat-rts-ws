import { FC } from 'react';
import { AuthProps } from '../types';

export const Auth: FC<AuthProps> = ({ header, children }): JSX.Element => {
  return (
    <div className="auth-container">
      <h2>{header}</h2>
      <div className="auth">{children}</div>
    </div>
  );
};
