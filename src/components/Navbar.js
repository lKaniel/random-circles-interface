import React from 'react';
import styled from "styled-components";
import AuthButton from "./AuthButton";

const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 999999;
  width: 20rem;
  height: 6rem;
  margin: 1rem;
  border-radius: 1rem 4rem 1rem;
  background: var(--dark-color-20);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Navbar = () => {

    return (
        <StyledNavbar>
            <AuthButton/>
        </StyledNavbar>
    );
};

export default Navbar;
