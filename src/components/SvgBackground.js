import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Image = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease-in-out;
  }
  
  .LoggedIn{
    transform: scale(5) rotate(-15deg);
  }

  .LoggingIn{
    transform: scale(1.5) rotate(15deg);
  }
`;

const SvgBackground = ({src}) => {
    const isSignedIn = useSelector(state => state.auth.isSignedIn)
    const isLogging = useSelector(state => state.auth.isLogging)

    const cls =  isSignedIn ? "LoggedIn" : isLogging ? "LoggingIn" : "";

    return (
        <Image>
            <img
                src={src}
                alt={"background"}
                className={cls}
            />
        </Image>
    );
};

export default SvgBackground;
