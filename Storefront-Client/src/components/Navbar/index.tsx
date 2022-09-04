import { NavLink, useNavigate } from 'react-router-dom';

import { useStoreSelector, useStoreDispatch } from 'store';
import { UserActions } from 'store/slices/user.slice';

import './navbar.scss';

const Navbar = () => {
  const navigateTo = useNavigate();
  const dispatch = useStoreDispatch();
  const user = useStoreSelector(({user}) => user.user);

  const handleLogout = () => {
    localStorage.removeItem('login-token');
    dispatch(UserActions.setUser(null));
  }

  return (
    <nav>
      <NavLink to="/">
        <img src="/logo.png" alt="logo" />
      </NavLink>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/user/id">Profile</NavLink></li>
      </ul>
      <div className="auth">
        {
          user ?
          <div className="user">
            <p><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ display: 'inline', width: 32, height: 32 }} alt="" /> { user.firstname } { user.lastname } <button onClick={handleLogout} style={{ marginLeft: 15 }}>Logout ?</button></p>
          </div>
          :
          <>
            <button onClick={() => navigateTo('/login')}>Login</button>
            <button onClick={() => navigateTo('/signup')}>Signup</button>
          </>
        }
      </div>
    </nav>
  )
}

export default Navbar