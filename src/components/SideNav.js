import React from "react";
import styled from "styled-components";

const SideNav = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideNavButtons = styled.button`
  width: 100%;
  height: 10%;
  background-color: #dda5b2;
  border: none;
  border-radius: 10px;
  margin-top: 10%;
`; 

const NavBar = () => {
  return (
    <SideNav>
      <SideNavButtons>Button 1</SideNavButtons>
      <SideNavButtons>Button 2</SideNavButtons>
      <SideNavButtons>Button 3</SideNavButtons>
      <SideNavButtons>Button 4</SideNavButtons>
      <SideNavButtons>Button 5</SideNavButtons>
    </SideNav>
  );
};

export default NavBar;
