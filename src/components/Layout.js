import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {startInnitEvents} from "../store/actions/appSideActions";
import styled from "styled-components";
import PeerProvider from "./PeerProvider";
import SvgBackground from "./SvgBackground";

import loginBg from "../assets/images/login-bg.svg"
import LoginForm from "../pageFragments/LoginForm";
import TopBar from "../pageFragments/TopBar";

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: var(--dark-color-20);
  overflow: hidden;
  overflow-x: hidden;
  z-index: 1;
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: auto;
  z-index: 10;
`;


const Layout = ({children}) => {

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(startInnitEvents(window))
    }, [dispatch])


    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const isLogging = useSelector(state => state.auth.isLogging)

    if (!isSignedIn || isLogging) return (
        <>
            <PeerProvider/>
            <Wrapper>
                <SvgBackground src={loginBg} shouldZoom={true}/>
                <Container>
                    <LoginForm/>
                </Container>
            </Wrapper>
        </>
    )

    return (
        <>
            <PeerProvider/>
            <Wrapper>
                <SvgBackground src={loginBg} shouldZoom={true}/>
                <Container>
                    <TopBar/>
                    {children}
                </Container>
            </Wrapper>
        </>
    );
};

export default Layout;
