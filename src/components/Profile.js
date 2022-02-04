import React from 'react';
import styled from "styled-components";
import AuthButton from "./AuthButton";
import {useSelector} from "react-redux";
import { DiscOutline, MedalOutline, SnowOutline} from "react-ionicons";

const StyledProfile = styled.nav`
  --profileColor: var(--accent-color);
  --itemShadowColor: var(--accent-color-20);
  --itemFontColor: var(--dark-color-20);
  --transition: background .2s ease-in-out, box-shadow .2s ease-in-out, color .2s ease-in-out;
  
  position: relative;
  width: 22rem;
  height: 8rem;
  margin: 1rem;
  border-radius: 1rem 4rem 1rem;
  background: var(--dark-color);
  display: flex;
  align-items: center;
  justify-content: center;
  //padding: 1rem;
  z-index: 999;
  user-select: none;
  box-shadow: .125rem -.125rem 0 var(--accent-color);
  transition: var(--transition);
  
  :hover{
    --profileColor: var(--dark-color);
    --itemShadowColor: var(--accent-color);
    --itemFontColor: var(--light-color);
    background: var(--accent-color);
    cursor: pointer;
  }
`;

const Info = styled.div`
  position: relative;
  color: var(--profileColor);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: var(--transition);
`;

const Account = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Name = styled.div`
  position: relative;
  color: var(--profileColor);
  font-size: 1.5rem;
  transition: var(--transition);
`;

const Icon = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  border: .0625rem solid var(--accent-color);
  box-shadow: .0625rem -.0625rem 0 var(--accent-color);
  overflow: hidden;
  background: var(--profileColor);
  border-radius: 1rem 2rem 1rem;
  left: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  background: var(--profileColor);
  color: var(--itemFontColor);
  font-size: 1rem;
  width: 6rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: .3rem;
  font-weight: 400;
  border-radius: 1rem 2rem 1rem;
  box-sizing: border-box;
  padding: 0 1rem;
  box-shadow: .125rem -.125rem 0 var(--itemShadowColor);
  transition: var(--transition);

  .icon {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--itemFontColor);
    display: flex;
    transition: var(--transition);
  }
`

const Profile = () => {

    const isLogging = useSelector(state => state.auth.isLogging)
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const user = useSelector(state => state.auth.user)
    const imageUrl = useSelector(state => state.auth.imageUrl)

    if (isLogging) return (
        <StyledProfile>
            <Info>
                Loading...
            </Info>
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
                    <SnowOutline
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
            <Account>
                <Icon>
                    {imageUrl !== "" ? <img src={imageUrl} alt={""}/> : null}
                </Icon>
                <Name>
                    {user?.username}
                </Name>
            </Account>
        </StyledProfile>
    )
};

export default Profile;
