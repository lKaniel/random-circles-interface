import React from "react"
import Seo from "../components/Seo";
import Profile from "../components/Profile";
import LoginForm from "../pageFragments/LoginForm";
import {useSelector} from "react-redux";
import styled from "styled-components";
import TopBar from "../pageFragments/TopBar";

const MainWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

export default function Home() {
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const isLogging = useSelector(state => state.auth.isLogging)

    if (!isSignedIn || isLogging) return (
        <>
            <Seo title={"home"}/>
            <LoginForm/>
        </>
    )

    return (
        <>
            <Seo title={"home"}/>
            <MainWrapper>
                <TopBar/>
            </MainWrapper>
        </>
    )
}
