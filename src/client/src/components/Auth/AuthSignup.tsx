import './assets/styles.scss';
import { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, signup } from '../../store';

export const AuthSignup: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const signupUser = (e: FormEvent<HTMLFormElement>) => {
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
    dispatch(signup(user));
  };

  return (
    <>
      <div className='auth-form-separator'>
        <span className='auth-form-separator-text'>OR</span>
        <div className='auth-form-separator-line'></div>
      </div>
      <form onSubmit={signupUser} className='form'>
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
        <button className='form-btn'>Sign Up</button>
      </form>
    </>
  );
};
