import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import Typed from 'react-typed';
import wood from '../images/wood.jpg';

const HeaderStyled = styled.header`
  position: relative;
  font-family: Montserrat;
  background-color: #312824;

  /* background-image: url(${wood}); */
  color: white;
  min-height: 40vh;
  font-style: italic;
  font-weight: 700;
  font-size: 3rem;
  /* background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  max-height: 600px;
  min-height: 200px; */
`;

const TextStyled = styled.div`
  position: absolute;
  width: 50%;
  max-width: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 4rem;
  text-align: center;
`;

const TextStyledOneLine = styled.div`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  font-style: normal;
`;

// const ImageDiv = styled.div`
//   /* background-color: rgba(49, 40, 36, 0.85); */
//   color: white;
//   height: 40vh;
//   width: 100%;
//   font-style: italic;
//   font-weight: 700;
//   font-size: 3rem;
// `;

const Header = () => (
  <HeaderStyled>
    {/* <ImageDiv> */}
    <TextStyled>
      <div>
        <Typed
          strings={[
            'TwojeWidzimisie Salon Optyczny']}
          typeSpeed={40}
        >
        </Typed>
      </div>
      <TextStyledOneLine>
        <Typed
          strings={[
            'Jestescie dla nas najwazniejsi!']}
          typeSpeed={20}
          startDelay={2500}
          showCursor={false}
        >
        </Typed>
      </TextStyledOneLine>
    </TextStyled>
    {/* </ImageDiv> */}
  </HeaderStyled>
)


export default Header
