import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSlice.selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogout = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? 'Could`t get user email';
  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" disabled={isLoading} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
