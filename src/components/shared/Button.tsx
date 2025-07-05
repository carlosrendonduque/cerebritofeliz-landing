// ============================================
// src/components/shared/Button.tsx
// ============================================
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary' 
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        background: variant === 'primary' ? '#0176D3' : '#FF6B35',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      {children}
    </button>
  );
};