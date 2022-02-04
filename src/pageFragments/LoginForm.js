import React from 'react';
import AuthButton from "../components/AuthButton";
import {useSelector} from "react-redux";
import styled from "styled-components";

const LoginWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 20rem;
  height: 6rem;
  background: var(--dark-color-20);
  padding: 2rem;
  border-radius: 2rem;
`;

const Info = styled.div`
  position: relative;
  color: var(--accent-color);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const LoginForm = () => {
    const isLogging = useSelector(state => state.auth.isLogging)
    const isSignedIn = useSelector(state => state.auth.isSignedIn)

    if (isLogging) return (
        <LoginWrapper>
            <LoginContainer>
                <AuthButton visible={false}/>
                <Info>
                    Loading...
                </Info>
            </LoginContainer>
        </LoginWrapper>
    );

    if (!isSignedIn) return (
        <LoginWrapper>
            <LoginContainer>
                <AuthButton/>
            </LoginContainer>
        </LoginWrapper>
    );

    return null
};

export default LoginForm;
