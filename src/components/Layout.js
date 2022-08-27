import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';

function Layout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

export default Layout;
