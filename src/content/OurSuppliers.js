import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import Title from '../components/Title/Title';
import ButtonCostum from '../components/Button/Button';
import GridList from '../components/GridList/GridList';

const ContainerStyled = styled.section`
  background-color: #7D8260;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  font-weight: 300;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ParalaksDiv = styled.div`
  background-image: url('https://uniquekiosk.com/wp-content/uploads/2019/03/optical-shop-furniture-1.jpg');
  background-attachment: fixed;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
  max-height: 300px;
  min-height: 200px;
`;



const OurSuppliers = ({ history }) => (
  <>
    <ContainerStyled className="container-fluid">
      <div className="container">
        <Title name="Nasi Dostawcy" />
        <p>
          To akapit otwierający część dotyczącą produktów. To doskonałe miejsce, aby zaprezentować dostępne produkty, podkreślając ich ważne bądź wyjątkowe cechy. Aby dodać sklep internetowy, wybierz „Dodaj“, a następnie kliknij „Strona“ i z listy wybierz „Sklep internetowy“.
        </p>
        <GridList history={history} />
      </div>
    </ContainerStyled>
  </>
)


export default OurSuppliers
