import React from 'react';
import styled from "styled-components";

const FriendsWrapper = styled.div`
  position: relative;
  border-radius: 1rem 4rem 4rem;
  background: var(--accent-color);
  box-shadow: -.125rem .125rem 0 var(--accent-color) inset;
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
  background: var(--accent-color);
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
  border-radius: 1rem 4rem 4rem;
  box-shadow: 0 0 0 .125rem var(--accent-color) inset;
  overflow: hidden;
`;

const UserTab = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  color: var(--accent-color);
  font-size: 1.5rem;

  
  &:hover{
    background: var(--accent-color);
    filter: brightness(.9);
    color: var(--dark-color-20);
    cursor: pointer;
  }
`;

const SideBar = ({title, users}) => {

    console.log(users)

    const parsedUsers = users.map((user, index) => (
        <UserTab key={index}>
            {user.username}
        </UserTab>
    ))

    return (
        <FriendsWrapper>
            <FriendsTop>
                {title}
            </FriendsTop>
            <FriendsList>
                {parsedUsers}
            </FriendsList>
        </FriendsWrapper>
    );
};

export default SideBar;
