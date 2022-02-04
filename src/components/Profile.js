import React from 'react';
import styled from "styled-components";
import AuthButton from "./AuthButton";
import {useSelector} from "react-redux";
import {CogOutline, DiscOutline, MedalOutline} from "react-ionicons";

const StyledProfile = styled.nav`
  position: fixed;
  width: 20rem;
  height: 6rem;
  margin: 1rem;
  border-radius: 1rem 4rem 1rem;
  background: var(--dark-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 999;
`;

const Name = styled.div`
  position: relative;
  color: var(--accent-color);
  font-size: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Points = styled.div`
  position: absolute;
  width: 80%;
  height: 1.5rem;
  margin-top: 7rem;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  right: 1rem;
`;

const Point = styled.div`
  background: var(--accent-color);
  color: black;
  font-size: 1rem;
  width: 6rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: .3rem;
  font-weight: 900;
  border-radius: 1rem 2rem 1rem;
  box-sizing: border-box;
  padding: 0 1rem;
  
  .icon{
    width: 1.2rem;
    height: 1.2rem;
    color: black;
    display: flex;
  }
`

const Profile = () => {

    const isLogging = useSelector(state => state.auth.isLogging)
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const user = useSelector(state => state.auth.user)
    console.log(user)

    if (isLogging) return (
        <StyledProfile>
            <Name>
                Loading...
            </Name>
        </StyledProfile>
    );

    if (!isSignedIn) return (
        <StyledProfile>
            <AuthButton/>
        </StyledProfile>
    );

    return (
        <StyledProfile>
            <Points>
                <Point>
                    <DiscOutline
                        cssClasses={"icon"}
                    />
                    {user.coins}
                </Point>
                <Point>
                    <CogOutline
                        cssClasses={"icon"}
                    />
                    {user.crystals}
                </Point>
                <Point>
                    <MedalOutline
                        cssClasses={"icon"}
                    />
                    {user.rating}
                </Point>
            </Points>
            <Name>
                {user?.username}
            </Name>
        </StyledProfile>
    )
};

export default Profile;
