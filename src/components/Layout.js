import React, {useLayoutEffect} from 'react';
import {useDispatch} from "react-redux";
import {startInnitEvents} from "../store/actions/appSideActions";
import styled from "styled-components";
import PeerProvider from "./PeerProvider";
import PeerConsumer from "./PeerConsumer";
import SvgBackground from "./SvgBackground";

import loginBg from "../assets/images/login-bg.svg"

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  background: var(--dark-color-20);
  overflow-x: hidden;
  z-index: 1;
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: auto;
  z-index: 10;
`;


const Layout = ({children}) => {

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(startInnitEvents(window))
    }, [])

    return (
        <>
            <PeerProvider/>
            <PeerConsumer/>
            <Wrapper>
                <SvgBackground src={loginBg}/>
                <Container>
                    {children}
                </Container>
            </Wrapper>
        </>
    );
};

export default Layout;
