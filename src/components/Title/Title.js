import styled from "styled-components";
import React from "react";

const H1Style = styled.h1`
  font-weight: 300;
  text-align: center;
  color: white;
`;

const WhiteLine = styled.div`
  width: 40px;
  max-width: 80%;
  height: 2px;
  background-color: white;
  margin: 20px auto;
  margin-bottom: 30px;
`;



const Title = ({ name }) => (
  <>
    <H1Style>{name}</H1Style>
    <WhiteLine />
  </>
)


export default Title
