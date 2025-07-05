import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Solution from "./components/sections/Solution";
import Builder from "./components/sections/Builder";
import EmailCapture from "./components/sections/EmailCapture";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <Layout>
      <Hero />
      <Problem />
      <Solution />
      <Builder />
      <EmailCapture />
      <Footer />
    </Layout>
  );
}

export default App;
