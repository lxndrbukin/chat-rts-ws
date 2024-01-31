import './assets/styles.scss';
import { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, login } from '../../store';
import { googleImg, discordImg } from './assets/buttonImgs';

export const AuthLogin: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const { email, password } = target;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
  };

  return (
    <>
      <div className='auth-form-separator'>
        <span className='auth-form-separator-text'>OR</span>
        <div className='auth-form-separator-line'></div>
      </div>
      <form onSubmit={loginUser} className='form'>
        <input
          type='email'
          className='form-input'
          placeholder='Email'
          name='email'
        />
        <input
          type='password'
          className='form-input'
          placeholder='Password'
          name='password'
        />
        <button className='form-btn'>Login</button>
      </form>
    </>
  );
};
