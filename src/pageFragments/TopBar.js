import React from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";

const Top = styled.nav`
  position: relative;
  grid-column: 1/span 2;
  display: flex;
  margin: 1rem;
`;

const Menu = styled.div`
  position: absolute;
  width: 22rem;
  height: 100%;
  animation: initLeftWithStretch 1s ease-in-out forwards;
  background: var(--accent-color);
  border-radius: 1rem 4rem 1rem;
`

const TopBar = () => {
    return (
        <Top>
            <Profile/>
            <Menu/>
        </Top>
    );
};

export default TopBar;
