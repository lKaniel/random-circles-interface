import React from 'react';
import styled from "styled-components";

const FriendsWrapper = styled.div`
  position: relative;
  border-radius: 1rem 4rem 1rem;
  background: var(--accent3-color);
  box-shadow: -.125rem .125rem 0 var(--accent3-color) inset;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 1;
  animation: initLeft .5s ease-in-out forwards;
  transform: translate(-100vw, 0vh);
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const FriendsTop = styled.div`
  width: 100%;
  height: 6rem;
  background: var(--accent3-color);
  color: var(--dark-color-20);
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const FriendsList = styled.div`
  width: 100%;
  height: 100%;
  background: var(--dark-color);
  border-radius: 1rem 4rem 1rem 0;
  box-shadow: -.125rem .125rem 0 var(--accent3-color) inset;
`;

const Friends = () => {
    return (
        <FriendsWrapper>
            <FriendsTop>
                Friends
            </FriendsTop>
            <FriendsList>

            </FriendsList>
        </FriendsWrapper>
    );
};

export default Friends;
