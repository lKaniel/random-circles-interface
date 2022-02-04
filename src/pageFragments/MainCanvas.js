import React from 'react';
import styled from "styled-components";
import SvgBackground from "../components/SvgBackground";
import main_bg from "../assets/images/main-bg.svg"

const MainWrapper = styled.div`
  position: relative;
  border-radius: 4rem 4rem 1rem;
  background: var(--dark-color);
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;
  animation: initRight .5s ease-in-out .5s forwards;
  transform: translate(-100vw, 0vh);
  box-shadow: 0 0 0 .125rem var(--accent-color);
  overflow: hidden;
`;

const MainCanvas = () => {
    return (
        <MainWrapper>
            <SvgBackground src={main_bg}/>
            <h1>
                Random circles beta release now live!
            </h1>
        </MainWrapper>
    );
};

export default MainCanvas;
