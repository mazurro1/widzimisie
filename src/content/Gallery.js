import styled from "styled-components";
import React from "react";
import Title from '../components/Title/Title';
import ButtonCostum from '../components/Button/Button';
import MyGallery from '../components/Gallery/Gallery';


const DivGallery = styled.section`
  background-color: #27211E;
  width: 100%;
  padding: 60px 0;
  text-align: center;
`;



const Gallery = () => (
    <DivGallery>
        <div className="container">
            <ButtonCostum name="Umów Wizytę" />
            <ButtonCostum name="Zadzwoń" full />
            <MyGallery />
        </div>
    </DivGallery>
)


export default Gallery
