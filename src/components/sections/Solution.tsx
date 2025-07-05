import React from "react";
import styled from "styled-components";

const SolutionSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: white;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #cbd5e1;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
`;

const FeatureCard = styled.div`
  padding: 2.5rem 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  color: white;
  margin: 0 0 1rem 0;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0 0 1rem 0;
`;

const FeatureBenefit = styled.div`
  padding: 0.75rem 1rem;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 8px;
  color: #4ade80;
  font-weight: 600;
  font-size: 0.9rem;
`;

const CorePrinciple = styled.div`
  max-width: 600px;
  margin: 3rem auto 0 auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, #0176d3 0%, #0284c7 100%);
  border-radius: 16px;
  border: 2px solid #38bdf8;
`;

const PrincipleTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PrincipleDescription = styled.p`
  color: #e0f2fe;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.6;
`;

const Solution: React.FC = () => {
  return (
    <SolutionSection>
      <SectionTitle>The CerebritoFeliz Difference</SectionTitle>
      <SectionSubtitle>
        Learning that actually works, powered by AI and cognitive science
      </SectionSubtitle>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>AI Content Generation</FeatureTitle>
          <FeatureDescription>
            Never run out of questions, code examples, or scenarios. Our AI
            generates personalized content based on your learning goals and
            current knowledge gaps.
          </FeatureDescription>
          <FeatureBenefit>
            Always fresh, always relevant, always challenging
          </FeatureBenefit>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🧠</FeatureIcon>
          <FeatureTitle>Science-Backed Memory Retention</FeatureTitle>
          <FeatureDescription>
            We use proven cognitive science techniques to optimize when and how
            you review concepts, ensuring maximum retention with minimum effort.
          </FeatureDescription>
          <FeatureBenefit>Remember more, study less</FeatureBenefit>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🎯</FeatureIcon>
          <FeatureTitle>Personalizes to Your Style</FeatureTitle>
          <FeatureDescription>
            The platform learns how you learn best - visual, code-heavy,
            theoretical, or practical - and adapts content delivery accordingly.
          </FeatureDescription>
          <FeatureBenefit>
            Learning that fits you, not the other way around
          </FeatureBenefit>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>😊</FeatureIcon>
          <FeatureTitle>Actually Enjoyable</FeatureTitle>
          <FeatureDescription>
            Learning should energize you, not drain you. We've designed every
            interaction to be engaging, rewarding, and dare we say... fun.
          </FeatureDescription>
          <FeatureBenefit>
            Look forward to studying instead of dreading it
          </FeatureBenefit>
        </FeatureCard>
      </FeaturesGrid>

      <CorePrinciple>
        <PrincipleTitle>🌟 The 80/20 Learning Principle 🌟</PrincipleTitle>
        <PrincipleDescription>
          We focus on the 20% of learning techniques that deliver 80% of the
          results. No fluff, no waste, just efficient mastery that accelerates
          your career.
        </PrincipleDescription>
      </CorePrinciple>
    </SolutionSection>
  );
};

export default Solution;
