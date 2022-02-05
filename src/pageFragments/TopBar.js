import React from 'react';
import styled from "styled-components";
import Profile from "../components/Profile";
import {Link} from "gatsby";

const Top = styled.nav`
  position: relative;
  grid-column: 1/span 2;
  display: flex;
`;

const TopWrapper = styled.div`
  position: absolute;
  width: 22rem;
  height: 100%;
  animation: initLeftWithStretch 1s ease-in-out forwards;
  background: var(--accent-color);
  border-radius: 1rem 4rem 1rem;
  box-sizing: border-box;
  padding-left: 23rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  -ms-grid-column-align: center;
`

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 2rem;
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
`;

const MenuElement = styled.li`
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--dark-color-20);
`;

const PlayButton = styled.button`
  width: 15rem;
  height: 5rem;
  border-radius: 1rem 3rem 1rem;
  background: var(--dark-color-20);
  border: .125rem solid var(--accent3-color);
  grid-column: 3;
  color: var(--accent3-color);
  font-size: 2rem;
  text-transform: uppercase;
  margin: 1.5rem 3rem;
  font-weight: 900;
  cursor: pointer;
  
  :hover{
    background: var(--accent3-color);
    a{
      color: var(--dark-color-20);
    }
  }
  
  a{
    color: var(--accent3-color);
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`

const TopBar = () => {
    return (
        <Top>
            <Profile/>
            <TopWrapper>
                <Menu>
                    <MenuElement>
                        Shop
                    </MenuElement>
                    <MenuElement>
                        Collection
                    </MenuElement>
                    <MenuElement>
                        Leaderboards
                    </MenuElement>
                    <MenuElement>
                        Settings
                    </MenuElement>
                </Menu>
                <PlayButton>
                    <Link to={"/lobby"}>
                        Play
                    </Link>
                </PlayButton>
            </TopWrapper>
        </Top>
    );
};

export default TopBar;
