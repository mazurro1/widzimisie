import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import Title from '../components/Title/Title';
import ButtonCostum from '../components/Button/Button';

const DivJob = styled.section`
  background-color: #312824;
  width: 100%;
  padding: 60px 0;
`;

const DivImg = styled.div`
  text-align: center;
  margin: 40px 0;
  img{
    border-radius: 50%;
  }
`;

const ContainerDiv = styled.div`
  color: white;
  text-align: center;
`;

const Paragraph = styled.p`
  margin-bottom: 30px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
`;

const OurJob = () => (
  <DivJob>
    <ContainerDiv className="container">
      <Title name="Poznaj nas i naszą pracę" />
      <DivImg>
        <img src="https://static.wixstatic.com/media/7cd043de7c2f46a7ad664c021251a5c2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01/Eye%20Test%20Glasses.webp" />
      </DivImg>
      <Paragraph>
        Czy dotychczasowe Usługi optyczne nie spełniły Twoich oczekiwań? Zapraszamy do Nas. Firma TwojeWidzimisię jest odnajdywać niespotykane lecz i najciekawsze fasony opraw i sprowadza jest właśnie do naszego miasta. Swoje usługi świadczymy Kielcach na ul Bodznetyńskiej 24 i Wapiennikowej 14  spełniając wszelkie oczekiwania klientów.
    </Paragraph>
      <ButtonCostum name="Zadzwoń" />
    </ContainerDiv>
  </DivJob>
)


export default OurJob
