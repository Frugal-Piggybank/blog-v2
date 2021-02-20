import React, { FC } from 'react';
import Navigation from './components/navigation/navigation';

const Layout: FC = ({ children }) => {
  return (
    <div className="container mx-auto flex">
      <Navigation />
      <main className="flex-auto">{children}</main>
    </div>
  );
};

export default Layout;
