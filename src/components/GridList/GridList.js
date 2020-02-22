import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const DivContainer = styled.div`
   display: grid;
  grid-gap: 20px; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "BigImage BigImage SmallImage1 SmallImage2" "BigImage BigImage SmallImage3 SmallImage4" "SmallImage5 SmallImage6 SmallImage7 SmallImage8";

@media all and (max-width: 991px){
	&{
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   grid-template-areas: "BigImage BigImage SmallImage1" "BigImage BigImage SmallImage2" "SmallImage3 SmallImage4 SmallImage5" "SmallImage6 SmallImage7 SmallImage8";
	}
}

  @media all and (max-width: 767px){
	&{
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "BigImage BigImage" "BigImage BigImage" "SmallImage1 SmallImage2" "SmallImage3 SmallImage4" "SmallImage5 SmallImage6" "SmallImage7 SmallImage8";
	}
}


@media all and (max-width: 576px){
	&{
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "BigImage" "BigImage" "SmallImage1" "SmallImage2" "SmallImage3" "SmallImage4" "SmallImage5" "SmallImage6" "SmallImage7" "SmallImage8";
	}
}
  
.SmallImage1 { grid-area: SmallImage1; }

.SmallImage2 { grid-area: SmallImage2; }

.SmallImage3 { grid-area: SmallImage3; }

.SmallImage4 { grid-area: SmallImage4; }

.SmallImage5 { grid-area: SmallImage5; }

.SmallImage6 { grid-area: SmallImage6; }

.SmallImage7 { grid-area: SmallImage7; }

.SmallImage8 { grid-area: SmallImage8; }
`;

const BigImage = styled.div`
   position: relative;
   background-image: url('https://lh3.googleusercontent.com/proxy/5h_nPj-J5FK74pZuSTWXQMbNCf49WwfF79NqT-mR0_wTfc_XaC0xGRseBOri3kgiJYXW6_VsjnlCqTgbjujfwudGWsExuA-J5bc3s4G_T-UjFaYd8LjE99VUJL1nNZcBTH7Kq8gPytAusDnD-mtXhoY4LPaECFTRvKduysI9ZIYpnw');
   background-size: cover;
   grid-area: BigImage; 
   /* background-color: red; */
   min-height: 400px;
   cursor: pointer;
   transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: ease;
   &:hover{
      transform: scale(1.05);
   }
`;

const SmallImage = styled.div`
   position: relative;
   background-image: url('https://lh3.googleusercontent.com/proxy/5h_nPj-J5FK74pZuSTWXQMbNCf49WwfF79NqT-mR0_wTfc_XaC0xGRseBOri3kgiJYXW6_VsjnlCqTgbjujfwudGWsExuA-J5bc3s4G_T-UjFaYd8LjE99VUJL1nNZcBTH7Kq8gPytAusDnD-mtXhoY4LPaECFTRvKduysI9ZIYpnw');
   background-size: cover;
   /* background-color: blue; */
   min-height: 200px;
   cursor: pointer;
   transition-property: transform;
	transition-duration: 0.3s;
	transition-timing-function: ease;
   &:hover{
      transform: scale(1.05);
   }
`;

const TextPosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
`;



const GridList = () => {
   const handleClickItemList = (link) => {
      window.open(link, '_blank');
   }
   return (
      <DivContainer>
         <BigImage
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/oprawy-okularowe.html')}
         >
            <TextPosition>
               NASZE OPRAWY OKULAROWE
            </TextPosition>
         </BigImage>
         <SmallImage
            className="SmallImage1"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/soczewki-progresywne.html')}
         >
            <TextPosition>
               SOCZEWKI PROGRESYWNE
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage2"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/soczewki-jednoogniskowe.html')}
         >
            <TextPosition>
               SOCZEWKI JEDNOOGNISKOWE
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage3"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/okulary-do-czytania.html')}
         >
            <TextPosition>
               SOCZEWKI BIUROWE
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage4"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/soczewki-biurowe.html')}
         >
            <TextPosition>
               SOCZEWKI BIUROWE
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage5"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/soczewki-dla-kierowcow.html')}
         >
            <TextPosition>
               SOCZEWKI DLA KIEROWCÓW
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage6"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/okulary-dla-dzieci.html')}
         >
            <TextPosition>
               OKULARY DLA DZIECI
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage7"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/okulary-sportowe.html')}
         >
            <TextPosition>
               SOCZEWKI SPORTOWE
            </TextPosition>
         </SmallImage>
         <SmallImage
            className="SmallImage8"
            onClick={() => handleClickItemList('https://www.rodenstock.com/pl/pl/okulary-przeciws-oneczne.html')}
         >
            <TextPosition>
               OKULARY PRZECIWSŁONECZNE
            </TextPosition>
         </SmallImage>
      </DivContainer>
   )
}
export default GridList;