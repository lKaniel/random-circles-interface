import React from 'react';
import styled from "styled-components";

const FriendsWrapper = styled.div`
  position: relative;
  border-radius: 1rem 4rem 1rem;
  background: var(--dark-color);
  box-shadow: -.125rem .125rem 0 var(--accent-color) inset;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 1;
  animation: initLeft .5s ease-in-out forwards;
  transform: translate(-100vw, 0vh);
  overflow: hidden;
`;

const FriendsTop = styled.div`
  width: 100%;
  height: 6rem;
  background: var(--accent-color);
  color: var(--dark-color-20);
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const Friends = () => {
    return (
        <FriendsWrapper>
            <FriendsTop>
                Friends
            </FriendsTop>
        </FriendsWrapper>
    );
};

export default Friends;
