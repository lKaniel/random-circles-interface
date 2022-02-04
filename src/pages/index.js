import React from "react"
import Seo from "../components/Seo";
import Profile from "../components/Profile";
import LoginForm from "../pageFragments/LoginForm";
import {useSelector} from "react-redux";
import styled from "styled-components";
import TopBar from "../pageFragments/TopBar";
import Friends from "../pageFragments/Friends";
import MainCanvas from "../pageFragments/MainCanvas";

const MainWrapper = styled.section`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  display: grid;
  margin: 1rem;
  column-gap: 1rem;
  row-gap: 1.5rem;
  grid-template-columns: 22rem 1fr;
  grid-template-rows: 8rem 1fr;
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
                <Friends/>
                <MainCanvas/>
            </MainWrapper>
        </>
    )
}
