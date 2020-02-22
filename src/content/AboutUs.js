import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import Title from '../components/Title/Title';
import ButtonCostum from '../components/Button/Button';

const ContainerStyled = styled.section`
  background-color: #7D8260;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  font-weight: 300;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ParalaksDiv = styled.section`
  background-image: url('https://uniquekiosk.com/wp-content/uploads/2019/03/optical-shop-furniture-1.jpg');
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  max-height: 300px;
  min-height: 200px;
`;



const AboutUs = () => (
    <>
        <ContainerStyled className="container-fluid">
            <div className="container">
                <Title name="Trochę o Nas" />
                <p>
                    TwojeWidzimisię czerpię dumę z tego, że klienci uznają nasz profesjonalizm, mając pełne zaufanie do świadczonych przeze nas usług. Oferuję rozwiązani dostosowane do indywidualnych potrzeb klientów po atrakcyjnych cenach, które spełniają wszystkie oczekiwania odbiorcy.
                    Współpracujemy ze światowymi dostawcami, którzy zapewniają najlepszą jakość
            </p>
                <ButtonCostum name="Kontakt" />
                <ButtonCostum name="Umów wizytę" full />
            </div>
        </ContainerStyled>
        <ParalaksDiv />
    </>
)


export default AboutUs
