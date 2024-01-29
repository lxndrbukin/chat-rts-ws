import './assets/styles.scss';
import { FC, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, signup } from '../../store';
import { googleImg, discordImg } from './assets/buttonImgs';

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
    <div className="auth-container">
      <h2>Welcome!</h2>
      <div className="auth">
        <div className="auth-form-container">
          <div className="auth-form-third-party">
            <button className="auth-form-btn google">
              {googleImg}
              Sign Up with Google
            </button>
            <button className="auth-form-btn discord">
              {discordImg}
              Sign Up with Discord
            </button>
          </div>
          <div className="auth-form-separator">
            <span className="auth-form-separator-text">OR</span>
            <div className="auth-form-separator-line"></div>
          </div>
          <form onSubmit={signupUser} className="auth-form">
            <input
              type="email"
              className="auth-form-input"
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              className="auth-form-input"
              placeholder="Password"
              name="password"
            />
            <button className="auth-form-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};