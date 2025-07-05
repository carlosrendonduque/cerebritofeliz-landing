import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0176d3;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0176d3;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Brand>🧠 CerebritoFeliz</Brand>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="https://github.com/carlosrendonduque">GitHub</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
