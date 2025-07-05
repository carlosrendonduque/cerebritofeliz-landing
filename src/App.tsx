import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import EmailCapture from './components/sections/EmailCapture';

function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <EmailCapture />
    </Layout>
  );
}

export default App;