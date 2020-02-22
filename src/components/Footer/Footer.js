import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RoomIcon from '@material-ui/icons/Room';

const FooterStyle = styled.footer`
  font-family: Montserrat;
  position: sticky;
  z-index: 100;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: #27211E;
  color: white;
  padding: 10px;

  svg{
      position: relative;
      transform: translateY(20%);
  }
`;

const Footer = () => (
    <FooterStyle>
        <PhoneIphoneIcon /> 796 000 777
    </FooterStyle>
)

export default Footer
