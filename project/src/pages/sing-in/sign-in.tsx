import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { useRef, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {fetchFilmsFavoriteAction, loginAction} from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { ErrorMessage } from '../../const';
import {setAuthorizationError} from '../../store/user-process/user-process';
import {getAuthorizationError} from '../../store/user-process/selectors';

function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationError = useAppSelector(getAuthorizationError);

  const dispatch = useAppDispatch();

  const validateAuthorization = (email: string, password: string): string | null => {
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(password);

    if (!isEmailValid) {
      return ErrorMessage.IncorrectEmail;
    }

    if (!isPasswordValid) {
      return ErrorMessage.SignInValidate;
    }
    return null;
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null) {
      const validError = validateAuthorization(loginRef.current.value, passwordRef.current.value);

      if (validError) {
        dispatch(setAuthorizationError(validError));
      } else {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch(fetchFilmsFavoriteAction);
      }
    } else {
      dispatch(setAuthorizationError(ErrorMessage.SignInValidate));
    }
  };


  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {
            authorizationError &&
            <div className="sign-in__message">
              <p data-testid="auth-error">{authorizationError}</p>
            </div>
          }
          <div className="sign-in__fields">
            <div className={`sign-in__field ${ authorizationError === ErrorMessage.IncorrectEmail ? 'sign-in__field--error' : ''}`}>
              <input
                ref ={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref ={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
