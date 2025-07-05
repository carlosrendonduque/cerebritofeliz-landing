// ============================================
// src/components/shared/Container.tsx
// ============================================
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth = '1200px' }) => {
  return (
    <div style={{
      maxWidth,
      margin: '0 auto',
      padding: '0 20px'
    }}>
      {children}
    </div>
  );
};

export default Container;