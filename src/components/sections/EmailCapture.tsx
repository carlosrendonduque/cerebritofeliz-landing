// ============================================
// src/components/sections/EmailCapture.tsx
// ============================================
import React, { useState } from 'react';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // TODO: Integrate with email service
  };

  return (
    <section>
      <h2>Join the Learning Revolution</h2>
      <p>Be among the first to experience joyful learning</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your.email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Get Early Access 🚀</button>
      </form>
      <p>No spam, just learning insights. Unsubscribe anytime.</p>
    </section>
  );
};