// ============================================
// src/components/layout/Navigation.tsx
// ============================================
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        🧠 CerebritoFeliz
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="https://github.com/carlosrendonduque">GitHub</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;