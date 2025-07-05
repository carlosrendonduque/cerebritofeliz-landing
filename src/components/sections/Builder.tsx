import React from 'react';
import styled from 'styled-components';

const BuilderSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 3rem 0;
  color: #1e293b;
`;

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 200px 1fr;
    text-align: left;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #0176d3 0%, #0284c7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin-bottom: 1rem;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
`;

const ProfileName = styled.h3`
  font-size: 1.2rem;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`;

const ProfileTitle = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OpeningHook = styled.p`
  font-size: 1.3rem;
  color: #0176d3;
  font-weight: 600;
  margin: 0;
  font-style: italic;
`;

const StoryParagraph = styled.p`
  color: #475569;
  line-height: 1.7;
  margin: 0;
  font-size: 1.1rem;
`;

const CredibilityMarkers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const CredibilityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #10b981;
`;

const CredibilityIcon = styled.span`
  font-size: 1.5rem;
`;

const CredibilityText = styled.span`
  color: #1e293b;
  font-weight: 500;
  font-size: 0.9rem;
`;

const PersonalMission = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #fee2e2 0%, #fef3c7 100%);
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
  margin: 2rem 0;
`;

const MissionText = styled.p`
  color: #92400e;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  font-style: italic;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #0176d3;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.2s ease;
  
  &:hover {
    background: #0284c7;
    transform: translateY(-2px);
  }
`;

const ConnectionCTA = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
`;

const CTAText = styled.p`
  color: #64748b;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
`;

const Builder: React.FC = () => {
  return (
    <BuilderSection>
      <SectionTitle>Hi, I'm Carlos - Your Fellow Learning Obsessive</SectionTitle>
      
      <StoryContainer>
        <ProfileSection>
          <ProfileImage>👨‍💻</ProfileImage>
          <ProfileName>Carlos Rendón</ProfileName>
          <ProfileTitle>Salesforce Developer</ProfileTitle>
        </ProfileSection>
        
        <StoryContent>
          <OpeningHook>
            "I'm not an education guru or learning expert. I'm just a developer who got tired of inefficient studying."
          </OpeningHook>
          
          <StoryParagraph>
            While preparing for my Salesforce Platform Developer II certification, I realized something was broken. 
            The existing tools were either boring flashcards that felt like punishment, or AI-generated content 
            that had no understanding of how people actually learn.
          </StoryParagraph>
          
          <StoryParagraph>
            So I did what any developer would do - I decided to build the solution I wanted to use.
          </StoryParagraph>
          
          <StoryParagraph>
            CerebritoFeliz isn't just another SaaS project for me. It's my personal learning laboratory. 
            Every algorithm, every feature, every UX decision is battle-tested on myself first. I'm literally 
            using this platform to prepare for my own certification while building it.
          </StoryParagraph>
          
          <StoryParagraph>
            This is learning by developers, for developers - with a healthy dose of Latino joy mixed in 
            because learning should never be a chore.
          </StoryParagraph>
          
          <CredibilityMarkers>
            <CredibilityItem>
              <CredibilityIcon>⚡</CredibilityIcon>
              <CredibilityText>Active Salesforce Developer</CredibilityText>
            </CredibilityItem>
            <CredibilityItem>
              <CredibilityIcon>🛠️</CredibilityIcon>
              <CredibilityText>React + Python + AI Skills</CredibilityText>
            </CredibilityItem>
            <CredibilityItem>
              <CredibilityIcon>🌐</CredibilityIcon>
              <CredibilityText>Building in Public</CredibilityText>
            </CredibilityItem>
            <CredibilityItem>
              <CredibilityIcon>🇨🇴</CredibilityIcon>
              <CredibilityText>Latino Pride + Global Mindset</CredibilityText>
            </CredibilityItem>
          </CredibilityMarkers>
          
          <PersonalMission>
            <MissionText>
              "My goal is simple: prove that learning can be efficient, effective, AND enjoyable. 
              If I can master Salesforce PD2 using CerebritoFeliz, then scale to AWS, ML, and beyond, you can too."
            </MissionText>
          </PersonalMission>
          
          <SocialLinks>
            <SocialLink href="https://linkedin.com/in/carlosrendonduque" target="_blank">
              💼 LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/carlosrendonduque" target="_blank">
              💻 GitHub
            </SocialLink>
            <SocialLink href="mailto:carlos@cerebritofeliz.dev">
              📧 Contact
            </SocialLink>
          </SocialLinks>
        </StoryContent>
      </StoryContainer>
      
      <ConnectionCTA>
        <CTAText>
          Follow my journey as I build this platform in public, share learning insights, 
          and prove that education can be both effective and joyful.
        </CTAText>
      </ConnectionCTA>
    </BuilderSection>
  );
};

export default Builder;