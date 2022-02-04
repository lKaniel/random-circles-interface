import React from 'react';
import styled from "styled-components";

const MainWrapper = styled.div`
  position: relative;
  border-radius: 1rem 4rem 1rem;
  background: var(--dark-color-20);
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;
  animation: initRight .5s ease-in-out .5s forwards;
  transform: translate(-100vw, 0vh);
`;

const MainCanvas = () => {
    return (
        <MainWrapper>

        </MainWrapper>
    );
};

export default MainCanvas;
