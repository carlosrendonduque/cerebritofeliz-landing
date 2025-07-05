import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #f8fafc;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #1e293b;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #0176d3;
  margin: 0 0 1rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #475569;
`;

const TagLine = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <MainTitle>🧠 CerebritoFeliz</MainTitle>
      <Subtitle>Master Any Tech Skill 3x Faster</Subtitle>
      <Description>
        AI-powered learning platform that makes technical education joyful and
        efficient
      </Description>
      <TagLine>
        Built with Latino pride 🇨🇴 | Designed for global impact 🌍
      </TagLine>
    </HeroSection>
  );
};

export default Hero;
