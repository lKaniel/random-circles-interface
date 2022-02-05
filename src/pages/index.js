import React from "react"
import Seo from "../components/Seo";
import styled from "styled-components";
import SideBar from "../components/SideBar";
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
    return (
        <>
            <Seo title={"home"}/>
            <MainWrapper>
                <SideBar title={"Friends"}/>
                <MainCanvas/>
            </MainWrapper>
        </>
    )
}
