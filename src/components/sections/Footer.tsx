import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  padding: 3rem 2rem 2rem 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandSection = styled.div`
  margin-bottom: 1.5rem;
`;

const BrandTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BrandDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  color: white;
  margin: 0 0 1rem 0;
  font-weight: 600;
`;

const FooterLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    color: #38bdf8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #0176d3;
    transform: translateY(-2px);
  }
`;

const NewsletterSection = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
`;

const NewsletterTitle = styled.h4`
  font-size: 1.2rem;
  color: white;
  margin: 0 0 0.5rem 0;
`;

const NewsletterDescription = styled.p`
  color: #cbd5e1;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
`;

const NewsletterForm = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #38bdf8;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #0176d3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: #0284c7;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #94a3b8;
  margin: 0;
  font-size: 0.875rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const LegalLink = styled.a`
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    color: #cbd5e1;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <NewsletterSection>
          <NewsletterTitle>🚀 Get Development Updates</NewsletterTitle>
          <NewsletterDescription>
            Follow the journey as I build CerebritoFeliz in public. Get
            insights, updates, and early access to new features.
          </NewsletterDescription>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="your.email@domain.com" />
            <NewsletterButton>Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterContent>
          <FooterColumn>
            <BrandSection>
              <BrandTitle>🧠 CerebritoFeliz</BrandTitle>
              <BrandDescription>
                AI-powered learning platform making technical education joyful
                and efficient. Built with Latino pride for the global developer
                community.
              </BrandDescription>
            </BrandSection>
            <SocialLinks>
              <SocialLink
                href="https://github.com/carlosrendonduque"
                target="_blank"
                title="GitHub"
              >
                💻
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/carlosrendonduque"
                target="_blank"
                title="LinkedIn"
              >
                💼
              </SocialLink>
              <SocialLink
                href="https://twitter.com/cerebritofeliz"
                target="_blank"
                title="Twitter"
              >
                🐦
              </SocialLink>
              <SocialLink href="mailto:carlos@cerebritofeliz.dev" title="Email">
                📧
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Learning Domains</FooterTitle>
            <FooterLink href="#salesforce">Salesforce Development</FooterLink>
            <FooterLink href="#aws">AWS Cloud (Coming Soon)</FooterLink>
            <FooterLink href="#ml">Machine Learning (Coming Soon)</FooterLink>
            <FooterLink href="#ai">Generative AI (Coming Soon)</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>About</FooterTitle>
            <FooterLink href="#story">My Story</FooterLink>
            <FooterLink href="#methodology">Learning Methodology</FooterLink>
            <FooterLink href="#blog">Blog (Coming Soon)</FooterLink>
            <FooterLink href="#case-study">Technical Case Study</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Connect</FooterTitle>
            <FooterLink href="mailto:carlos@cerebritofeliz.dev">
              General Inquiries
            </FooterLink>
            <FooterLink href="mailto:collaboration@cerebritofeliz.dev">
              Collaboration
            </FooterLink>
            <FooterLink href="mailto:jobs@cerebritofeliz.dev">
              Job Opportunities
            </FooterLink>
            <FooterLink href="#feedback">Feedback & Suggestions</FooterLink>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 CerebritoFeliz. Built with ❤️ and Latino pride for lifelong
            learners worldwide.
          </Copyright>
          <LegalLinks>
            <LegalLink href="#privacy">Privacy Policy</LegalLink>
            <LegalLink href="#terms">Terms of Use</LegalLink>
            <LegalLink href="#cookies">Cookie Policy</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
