import { Loader, Navigation, UserMenu } from 'components';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';

export const SharedLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <main>{children}</main>
    </div>
  );
};
