import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const TopNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #000;
  transition: all 0.3s ease;
  background-color: #e1e1e1;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const NavOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-right: 30%;
  margin-left: 30%;
`;

const NavOptions = styled(Link)`
  font-size: 1rem;
  font-weight: 900;
  color: #4b2e59;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const NavBar = () => {
  return (
      <TopNav>
        <NavOptionsContainer>
          <NavOptions to="/">HOME</NavOptions>
          <NavOptions to="/team">TEAM</NavOptions>
          <NavOptions to="/project">PROJECT</NavOptions>
          <NavOptions to="/safety">SAFETY</NavOptions>
          <NavOptions to="/human-practices">HUMAN PRACTICES</NavOptions>
          <NavOptions to="/awards">AWARDS</NavOptions>
        </NavOptionsContainer>
      </TopNav>
  );
};

export default NavBar;
