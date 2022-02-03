import React, {useLayoutEffect} from 'react';
import Navbar from "./Navbar";
import {useDispatch} from "react-redux";
import {startInnitEvents} from "../store/actions/appSideActions";
import styled from "styled-components";
import PeerProvider from "./PeerProvider";
import PeerConsumer from "./PeerConsumer";

const Wrapper = styled.main`
  width: 100vw;
  background: var(--dark-color);
  overflow-x: hidden;
`;

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  max-width: 90vw;
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
                <Navbar/>
                <Container>
                    {children}
                </Container>
            </Wrapper>
        </>
    );
};

export default Layout;
