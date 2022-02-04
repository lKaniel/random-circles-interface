import React from 'react';
import styled from "styled-components";

const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.animation ?
          `animation: ${props.animation};`
          : null}
`;

const AnimationWrapper = ({initialStyle, animation, children}) => {
    return (
        <AnimationContainer animation={animation} style={initialStyle}>
            {children}
        </AnimationContainer>
    );
};

export default AnimationWrapper;
