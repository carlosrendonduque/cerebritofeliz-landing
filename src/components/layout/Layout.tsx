// ============================================
// src/components/layout/Layout.tsx
// ============================================
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;