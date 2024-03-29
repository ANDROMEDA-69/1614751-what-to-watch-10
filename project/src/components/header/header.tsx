import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import Logo from '../logo/logo';


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onAvatarClickHandle = () => {
    const path = '/mylist';
    navigate(path);
  };

  return (
    <header className="page-header">
      <Logo />

      {authorizationStatus === AuthorizationStatus.Auth ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={onAvatarClickHandle}>
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to="#"
              className="user-block__link"
            >Sign out
            </Link>
          </li>
        </ul> :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}

    </header>
  );
}

export default Header;
