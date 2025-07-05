// ============================================
// src/components/shared/Typography.tsx
// ============================================
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
}

const Typography: React.FC<TypographyProps> = ({ children, variant }) => {
  const styles = {
    h1: { fontSize: '3rem', fontWeight: 'bold', margin: '0 0 1rem 0' },
    h2: { fontSize: '2rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' },
    h3: { fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' },
    body: { fontSize: '1rem', margin: '0 0 1rem 0' },
    caption: { fontSize: '0.875rem', color: '#666', margin: '0' }
  };

  const Component = variant === 'body' || variant === 'caption' ? 'p' : variant;

  return (
    <Component style={styles[variant]}>
      {children}
    </Component>
  );
};