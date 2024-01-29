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
    <div className='auth-container'>
      <h2>Welcome Back!</h2>
      <div className='auth'>
        <div className='auth-form-container'>
          <div className='auth-form-third-party'>
            <button className='auth-form-btn google'>
              {googleImg}
              Sign In with Google
            </button>
            <button className='auth-form-btn discord'>
              {discordImg}
              Sign In with Discord
            </button>
          </div>
          <div className='auth-form-separator'>
            <span className='auth-form-separator-text'>OR</span>
            <div className='auth-form-separator-line'></div>
          </div>
          <form onSubmit={loginUser} className='auth-form'>
            <input
              type='email'
              className='auth-form-input'
              placeholder='Email'
              name='email'
            />
            <input
              type='password'
              className='auth-form-input'
              placeholder='Password'
              name='password'
            />
            <button className='auth-form-btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
