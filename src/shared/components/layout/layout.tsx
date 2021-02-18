import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div className="container mx-auto flex">
      <main className="flex-auto">{children}</main>
    </div>
  );
};

export default Layout;
