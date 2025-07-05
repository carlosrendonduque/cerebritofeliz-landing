import React from 'react';
import styled from 'styled-components';

const ProblemSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: #1e293b;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin: 0 0 3rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PainPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
`;

const PainPoint = styled.div`
  padding: 2rem;
  border-radius: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
`;

const PainIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PainTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`;

const PainDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin: 0;
`;

const ClosingHook = styled.div`
  max-width: 600px;
  margin: 3rem auto 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #fee2e2 0%, #fef3c7 100%);
  border-radius: 12px;
  border-left: 4px solid #ef4444;
`;

const HookText = styled.p`
  font-size: 1.1rem;
  color: #991b1b;
  font-weight: 600;
  margin: 0;
  font-style: italic;
`;

const Problem: React.FC = () => {
  return (
    <ProblemSection>
      <SectionTitle>Why Traditional Learning Fails Developers</SectionTitle>
      <SectionSubtitle>
        You're too smart and your time is too valuable for inefficient learning methods
      </SectionSubtitle>
      
      <PainPointsGrid>
        <PainPoint>
          <PainIcon>😴</PainIcon>
          <PainTitle>Static Content That Puts You to Sleep</PainTitle>
          <PainDescription>
            Traditional flashcards and courses feel like punishment. They're boring, 
            repetitive, and designed for passive consumption instead of active learning.
          </PainDescription>
        </PainPoint>

        <PainPoint>
          <PainIcon>🤖</PainIcon>
          <PainTitle>Generic Tools That Don't Adapt</PainTitle>
          <PainDescription>
            Most learning platforms treat everyone the same. They can't adapt to your 
            learning style, pace, or current skill level, wasting your precious time.
          </PainDescription>
        </PainPoint>

        <PainPoint>
          <PainIcon>📚</PainIcon>
          <PainTitle>Academic Theory, Real-World Gaps</PainTitle>
          <PainDescription>
            You memorize concepts but struggle to apply them. There's a huge disconnect 
            between what you study and what you actually need on the job.
          </PainDescription>
        </PainPoint>

        <PainPoint>
          <PainIcon>⏰</PainIcon>
          <PainTitle>Hours Spent, Little Retained</PainTitle>
          <PainDescription>
            You spend hours studying but forget everything weeks later. Without spaced 
            repetition and smart scheduling, you're learning the same things over and over.
          </PainDescription>
        </PainPoint>
      </PainPointsGrid>

      <ClosingHook>
        <HookText>
          "You're too smart and your time is too valuable for inefficient learning. 
          There has to be a better way."
        </HookText>
      </ClosingHook>
    </ProblemSection>
  );
};

export default Problem;