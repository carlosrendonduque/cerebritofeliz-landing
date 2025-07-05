import React, { useState } from "react";
import styled from "styled-components";

const EmailSection = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background: white;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: #1e293b;
`;

const Description = styled.p`
  margin: 0 0 2rem 0;
  color: #666;
`;

const EmailForm = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 2px solid #0176d3;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #0284c7;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background: #0176d3;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0284c7;
  }
`;

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Integrate with email service
  };

  return (
    <EmailSection>
      <Title>Join the Learning Revolution</Title>
      <Description>
        Be among the first to experience joyful learning
      </Description>
      <form onSubmit={handleSubmit}>
        <EmailForm>
          <EmailInput
            type="email"
            placeholder="your.email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit">🚀</SubmitButton>
        </EmailForm>
      </form>
    </EmailSection>
  );
};

export default EmailCapture;
