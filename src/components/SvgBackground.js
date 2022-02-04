import React from 'react';
import styled from "styled-components";

const Image = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SvgBackground = ({src}) => {
    return (
        <Image>
            <img
                src={src}
                alt={"background"}
            />
        </Image>
    );
};

export default SvgBackground;