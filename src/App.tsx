// Update src/App.tsx with our sections
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#f8fafc",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0 0 1rem 0" }}>
          🧠 CerebritoFeliz
        </h1>
        <h2
          style={{ fontSize: "1.5rem", color: "#0176D3", margin: "0 0 1rem 0" }}
        >
          Master Any Tech Skill 3x Faster
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
          }}
        >
          AI-powered learning platform that makes technical education joyful and
          efficient
        </p>
        <p style={{ fontSize: "1rem", color: "#666" }}>
          Built with Latino pride 🇨🇴 | Designed for global impact 🌍
        </p>
      </section>
      <section
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          background: "white",
        }}
      >
        <h3 style={{ fontSize: "2rem", margin: "0 0 1rem 0" }}>
          Join the Learning Revolution
        </h3>
        <p style={{ margin: "0 0 2rem 0", color: "#666" }}>
          Be among the first to experience joyful learning
        </p>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="email"
            placeholder="your.email@domain.com"
            style={{
              width: "70%",
              padding: "12px",
              border: "2px solid #0176D3",
              borderRadius: "8px 0 0 8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              width: "30%",
              padding: "12px",
              background: "#0176D3",
              color: "white",
              border: "none",
              borderRadius: "0 8px 8px 0",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            🚀
          </button>
        </div>
      </section>
      {/* Coming Soon */}
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h3>🚀 Coming Soon</h3>
        <p>Full platform launching soon. Follow the journey!</p>
      </section>
    </div>
  );
}

export default App;
